export interface GiphyResponse {
  data: GiphyItem[];
}


export interface GiphyItem {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}
