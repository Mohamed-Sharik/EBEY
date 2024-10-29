import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImgGall({ imgs }) {
  const images = imgs.map((img) => ({
    original: img,
    thumbnail: img,
  }));
  return (
    <div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
      />
    </div>
  );
}
