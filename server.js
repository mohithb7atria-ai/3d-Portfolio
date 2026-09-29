import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 8090;

const server = http.createServer((req, res) => {
  // Strip query string
  const pathname = req.url.split('?')[0];
  let reqPath = pathname;

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/portfolio.html';
  } else if (reqPath === '/work') {
    reqPath = '/work.html';
  } else if (reqPath === '/projects' || reqPath === '/projects/') {
    // Only redirect exact /projects or /projects/ route (not assets inside /projects/ directory)
    res.writeHead(302, { 'Location': '/portfolio.html#pathways' });
    res.end();
    return;
  }

  const filePath = path.join(process.cwd(), decodeURIComponent(reqPath));
  const ext = path.extname(filePath);

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.json': 'application/json'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`404 Not Found: ${filePath}`);
      return;
    }

    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
