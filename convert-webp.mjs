import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folder = path.join(process.cwd(), 'dist/assets');

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const inputPath = path.join(folder, file);
      const outputPath = path.join(folder, path.parse(file).name + '.webp');

      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`${file} → ${path.parse(file).name}.webp`))
        .catch(console.error);
    }
  });
});
