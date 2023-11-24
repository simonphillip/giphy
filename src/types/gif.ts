export interface IGifResponse {
  data: {
    data: IGif[];
  };
}

//could extend this to all types if needed and had more time
export interface IGifImage {
  fixed_height: {
    height: number;
    width: number;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
}

export interface IGif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  alt_text?: string;
  images: IGifImage;
}
