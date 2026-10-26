import fs from 'fs';
import path from 'path';
import https from 'https';

const images = {
  'tracker-plus.jpg': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  'automatic-time.jpg': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  'productivity-scoring.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'attendance-presence.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'timesheets-reports.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'project-billing.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'shift-scheduling.jpg': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
  'leave-management.jpg': 'https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&w=800&q=80',
  'ethical-screenshots.jpg': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  'idle-private-time.jpg': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  'document-tracking.jpg': 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  'live-status.jpg': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'pomodoro-focus.jpg': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  'developer-mcp.jpg': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  'integrations-hub.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  'security-compliance.jpg': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
};

const dir = path.resolve('public/images/features');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function download(name, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(dir, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`Skipping ${name} (already exists, ${fs.statSync(dest).size} bytes)`);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Downloaded ${name}`);
              resolve();
            });
          });
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${name}`);
            resolve();
          });
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(name, url);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();
