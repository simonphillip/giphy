import { IGif } from "@/types/gif";
import axios from "axios";

const BASE_URL = "https://api.giphy.com/v1/gifs";

export const getTrendingGifs = async (): Promise<IGif[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending?api_key=${process.env.NEXT_PUBLIC_API_KEY}&limit=20`
    );

    return response.data.data;
  } catch (error) {
    //handle with error page or notification at a later stage
    throw error;
  }
};
