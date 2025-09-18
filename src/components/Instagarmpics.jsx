import React, { useEffect, useState } from "react";

export default function InstagramPhotos() {
  const [photos, setPhotos] = useState([]);
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token
  const userId = "YOUR_USER_ID"; // Replace with your Instagram user ID

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      try {
        const res = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_url,permalink,media_type&access_token=${accessToken}`
        );
        const data = await res.json();
        const images = data.data.filter((item) => item.media_type === "IMAGE");
        setPhotos(images);
      } catch (err) {
        console.error("Error fetching Instagram photos:", err);
      }
    };

    fetchInstagramPhotos();
  }, []);

  if (!photos.length) return null; // Or a loading indicator

  return (
    <div className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-amber-700">
        Follow Us on Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {photos.map((photo, index) => (
          <a
            key={photo.id}
            href={photo.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg shadow-sm hover:scale-105 transform transition duration-300"
          >
            <img
              src={photo.media_url}
              alt={`Instagram ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
