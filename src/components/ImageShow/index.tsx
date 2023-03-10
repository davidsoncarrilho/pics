type ImageShowType = {
  image: {
    urls: { small: string };
    alt_description: string;
  };
};

function ImageShow({ image }: ImageShowType) {
  return (
    <div className="image-show">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
