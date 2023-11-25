import React from "react";
import Image from "next/image";
import { IGif } from "@/types/gif";

interface IGifImageCardProps {
  gif: IGif;
}

const GifImageCard: React.FC<IGifImageCardProps> = ({ gif }) => {
  return (
    <Image
      key={gif.id}
      src={gif.images.fixed_height.webp}
      width={gif.images.fixed_height.width}
      height={gif.images.fixed_height.height}
      className="max-w-full w-full max-h-max rounded-lg cursor-pointer align-middle inline-block object-cover my-2"
      alt={gif?.alt_text || gif.title}
    />
  );
};

export default GifImageCard;
