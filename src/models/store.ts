export class Store {
  title: string;

  photoUrl: string;

  categories: string;

  duration: string;

  meetSource: string;

  onlineOnly: boolean;

  location?: {
    longitude: string;
    latitude: string;
  }[];

  rate: number;
}
