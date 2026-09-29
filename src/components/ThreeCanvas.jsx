import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.018);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 25);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x05070a, 1);
    container.appendChild(renderer.domElement);

    // 1. Starfield / Neural Particles
    const particlesCount = 1800;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const vermilionColor = new THREE.Color('#e0231c');
    const boneColor = new THREE.Color('#dfe7e0');
    const mutedColor = new THREE.Color('#38423c');

    for (let i = 0; i < particlesCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 80;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 80;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 80;

      // Color variation: 15% vermilion, 45% bone, 40% muted
      const rand = Math.random();
      let pickedColor = boneColor;
      if (rand < 0.15) pickedColor = vermilionColor;
      else if (rand > 0.6) pickedColor = mutedColor;

      colorArray[i * 3] = pickedColor.r;
      colorArray[i * 3 + 1] = pickedColor.g;
      colorArray[i * 3 + 2] = pickedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Custom circular particle texture using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 2. Floating 3D Geometric Grid Mesh
    const gridGeo = new THREE.PlaneGeometry(60, 60, 24, 24);
    const gridWire = new THREE.WireframeGeometry(gridGeo);
    const gridMat = new THREE.LineBasicMaterial({
      color: 0xdfe7e0,
      transparent: true,
      opacity: 0.05
    });
    const gridLines = new THREE.LineSegments(gridWire, gridMat);
    gridLines.rotation.x = -Math.PI / 2.5;
    gridLines.position.y = -12;
    scene.add(gridLines);

    // 3. Floating Icosahedron Nodes
    const icoGeo = new THREE.IcosahedronGeometry(4, 1);
    const icoWire = new THREE.WireframeGeometry(icoGeo);
    const icoMat = new THREE.LineBasicMaterial({
      color: 0xe0231c,
      transparent: true,
      opacity: 0.12
    });
    const icoMesh = new THREE.LineSegments(icoWire, icoMat);
    icoMesh.position.set(16, 5, -10);
    scene.add(icoMesh);

    const icoGeo2 = new THREE.IcosahedronGeometry(2.5, 1);
    const icoWire2 = new THREE.WireframeGeometry(icoGeo2);
    const icoMat2 = new THREE.LineBasicMaterial({
      color: 0xc9a24a,
      transparent: true,
      opacity: 0.15
    });
    const icoMesh2 = new THREE.LineSegments(icoWire2, icoMat2);
    icoMesh2.position.set(-18, -8, -5);
    scene.add(icoMesh2);

    // Mouse & Scroll Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = -scrollY * 0.008;
      gridLines.position.z = scrollY * 0.005;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.rotation.y = -targetX * 0.5;
      camera.rotation.x = -targetY * 0.5;

      // Rotate geometries
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      gridLines.rotation.z = elapsedTime * 0.015;
      icoMesh.rotation.x = elapsedTime * 0.15;
      icoMesh.rotation.y = elapsedTime * 0.2;

      icoMesh2.rotation.x = -elapsedTime * 0.1;
      icoMesh2.rotation.z = elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="gl"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#05070a]"
      aria-hidden="true"
    />
  );
}
