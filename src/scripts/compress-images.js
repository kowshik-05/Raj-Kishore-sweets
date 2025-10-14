// src/scripts/compress-images.js
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  try {
    await imagemin(["public/images/*.{jpg,JPG,png,PNG,webp}"], {
      destination: "public/images",
      plugins: [
        imageminMozjpeg({ quality: 50 }),
        imageminPngquant({ quality: [0.4, 0.6] }),
      ],
    });

    await imagemin(["public/Photos/*.{jpg,JPG,png,PNG,webp}"], {
      destination: "public/Photos",
      plugins: [
        imageminMozjpeg({ quality: 50 }),
        imageminPngquant({ quality: [0.4, 0.6] }),
      ],
    });
    console.log("✅ Images in all folders compressed!");
  } catch (err) {
    console.error("❌ Image compression failed:", err);
  }
})();
