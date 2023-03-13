import { Image } from "../../App";

type ImageShowType = {
  image: Image;
};

function ImageShow({ image }: ImageShowType) {
  return (
    <div className="image-show">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
