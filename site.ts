export interface Metatags {
  property?: string;
  content?: string;
  key?: string;
}

export class Site {
  static siteName = "كشك";
  static mainIcon = "/icons/kiosk-icon.png";
  static description = "MiGHTY 3li's new website";
  static url =
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : process.env.URL ?? "https://mi3li-blog.vercel.app";

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
  static meta: Metatags[] = [];
}
