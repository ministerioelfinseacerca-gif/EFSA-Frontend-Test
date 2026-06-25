const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SITE_URL = 'https://www.elfinseacerca.org/';
const OUTPUT_DIR = path.join(__dirname, 'images');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode !== 200) {
        resolve(false);
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => resolve(false));
      });
    }).on('error', (err) => {
      resolve(false);
    });
  });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log(`Navigating to ${SITE_URL}...`);
  await page.goto(SITE_URL, { waitUntil: 'networkidle2' });

  console.log('Extracting image URLs...');
  const imageUrls = await page.evaluate(() => {
    const urls = new Set();
    
    // Get all img src
    document.querySelectorAll('img').forEach(img => {
      if (img.src && !img.src.startsWith('data:')) {
        urls.add(img.src);
      }
    });

    // Get all background images
    const elements = document.querySelectorAll('*');
    for (let el of elements) {
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage;
      if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
        const matches = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (matches && matches[1] && !matches[1].startsWith('data:')) {
          urls.add(matches[1]);
        }
      }
    }
    return Array.from(urls);
  });

  console.log(`Found ${imageUrls.length} images. Downloading...`);
  
  let count = 0;
  for (let i = 0; i < imageUrls.length; i++) {
    let imgUrl = imageUrls[i];
    // Resolve relative URLs
    if (imgUrl.startsWith('//')) {
      imgUrl = 'https:' + imgUrl;
    } else if (imgUrl.startsWith('/')) {
      imgUrl = new URL(imgUrl, SITE_URL).href;
    }
    
    let parsedUrl;
    try {
      parsedUrl = new URL(imgUrl);
    } catch (e) {
      continue;
    }
    const filename = `image_${i}_${path.basename(parsedUrl.pathname)}`;
    const safeFilename = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
    const filepath = path.join(OUTPUT_DIR, safeFilename);
    
    console.log(`[${i+1}/${imageUrls.length}] Downloading: ${imgUrl}`);
    const success = await downloadImage(imgUrl, filepath);
    if (success) count++;
  }

  console.log(`Done! Successfully downloaded ${count} images.`);
  await browser.close();
})();
