import { useState, useEffect } from "react";

const usePreload = (filePaths) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadFiles = async () => {
      const promises = filePaths.map((file) => {
        return new Promise((resolve, reject) => {
          if (file.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.src = file;
            video.onloadeddata = resolve;
            video.onerror = () => {
              console.error(`Failed to load video: ${file}`);
              reject();
            };
          } else if (file.endsWith(".mp3")) {
            const audio = document.createElement("audio");
            audio.src = file;
            audio.onloadeddata = resolve;
            audio.onerror = () => {
              console.error(`Failed to load audio: ${file}`);
              reject();
            };
          } else if (file.endsWith(".docx") || file.endsWith(".pdf")) {
            fetch(file)
              .then((response) => {
                if (response.ok) {
                  resolve();
                } else {
                  console.error(`Failed to load document: ${file}`);
                  reject();
                }
              })
              .catch(() => {
                console.error(`Failed to load document: ${file}`);
                reject();
              });
          } else {
            const img = new Image();
            img.src = file;
            img.onload = resolve;
            img.onerror = () => {
              console.error(`Failed to load image: ${file}`);
              reject();
            };
          }
        });
      });

      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        setHasError(true);
      }
    };

    loadFiles();
  }, [filePaths]);

  return { isLoaded, hasError };
};

export default usePreload;
