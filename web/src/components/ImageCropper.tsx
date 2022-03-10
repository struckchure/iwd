import { get_image_url } from "../utils";

interface ImageCropperProps {
  imageURL: string;
  alt: string;
}

const ImageCropper = ({ imageURL, alt }: ImageCropperProps) => {
  return (
    <div className="w-max h-max rounded-full overflow-hidden">
      <img src={get_image_url(imageURL)} alt={alt} />
    </div>
  );
};

export default ImageCropper;
