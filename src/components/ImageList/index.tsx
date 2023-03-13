import { Image } from "../../App";
import ImageShow from "../ImageShow";
import "./ImageList.css";

export type ImageListProp = {
  images: Image[];
};

function ImageList({ images }: ImageListProp) {
  return (
    <div className="image-list">
      {images.map((image: Image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
