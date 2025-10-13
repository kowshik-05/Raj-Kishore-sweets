// src/scripts/compress-images.js
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  try {
    await imagemin(
      [
        "public/images/*.{jpg,png}",
        "public/Photos/*.{jpg,png}", // add your new folder
      ],
      {
        destination: "public", // keeps compressed images in the same folders
        plugins: [
          imageminMozjpeg({ quality: 75 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ],
      }
    );
    console.log("✅ Images in all folders compressed!");
  } catch (err) {
    console.error("❌ Image compression failed:", err);
  }
})();
