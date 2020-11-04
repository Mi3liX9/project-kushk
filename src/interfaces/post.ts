export interface PostProps {
  title: string;
  image?: string;
  date: Date | string;
  tags?: string[];
  slug: string;
  next?: {
    title: string;
    slug: string;
  };
  previous?: {
    title: string;
    slug: string;
  };
}
