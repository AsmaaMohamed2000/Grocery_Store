import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folder = path.join(process.cwd(), 'dist/assets'); // مجلد الصور

function compressImages(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
      const fullPath = path.join(dir, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) return console.error(err);

        if (stats.isDirectory()) {
          compressImages(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
          sharp(fullPath)
            .resize({ width: 1920 })
            .jpeg({ quality: 80 })
            .png({ compressionLevel: 8 })
            .toBuffer()
            .then(data => fs.writeFileSync(fullPath, data))
            .catch(err => console.error(err));
        }
      });
    });
  });
}

compressImages(folder);