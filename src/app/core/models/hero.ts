export interface Hero {
  comics: Array<any>;
  thumbnail: {
    extension: string;
    path: string;
  };
  id: number;
  name: string;
  resourceURI: string;
  urls: Array<any>;
}
