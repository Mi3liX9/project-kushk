export interface Metatags {
  name?: string;
  property?: string;
  content?: string;
  key?: string;
}

export class Site {
  static siteName = "مايتي بلوق";
  static mainIcon = "/icons/mi3li.png";
  static description = "MiGHTY 3li's new website";
  static url =
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : process.env.URL ?? "https://mi3li-blog.vercel.app/";

  static tabs = [
    { title: "المدونة التقنية", path: "/blog" },
    // { title: "قائمة الأنمي", path: "/mal" },
    // { title: "اكسبريس", path: "/express" },
    // { title: "مشتريات", path: "/purchaces" },
    // { title: "الأسئلة الشائعة", path: "/faq" },
    // { title: "من أنا", path: "/whoiam" },
  ];

  static footerTabs = [{ title: "الرئيسية", path: "/blog" }];

  static get socialMedia(): { name: string; url: string; image: string }[] {
    return [
      {
        name: "telegram",
        url: "https://t.me/mi3li_blog",
        image: "/icons/telegram.svg",
      },
      {
        name: "instagram",
        url: "https://instagram.com/mi3lix9",
        image: "/icons/instagram.png",
      },
    ].concat();
  }
  static meta: Metatags[] = [
    { name: "description", content: Site.description },
    // Facebook / Opengraph
    { name: "og:type", content: "website" },
    { name: "og:url", content: Site.url },
    { name: "og:title", content: Site.name },
    { name: "og:description", content: Site.description },
    { name: "og:image", content: Site.mainIcon },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: Site.url },
    { name: "twitter:title", content: Site.name },
    { name: "twitter:description", content: Site.description },
    { name: "twitter:image", content: Site.mainIcon },
  ];
}
