export class Site {
  static siteName = "مايتي بلوق";
  static mainIcon = "/icons/mi3li.png";

  static meta = [];

  static tabs = [
    { title: "المدونة التقنية", path: "/blog" },
    { title: "قائمة الأنمي", path: "/mal" },
    { title: "اكسبريس", path: "/express" },
    { title: "مشتريات", path: "/purchaces" },
    { title: "الأسئلة الشائعة", path: "/faq" },
    { title: "من أنا", path: "/whoiam" },
  ];

  static socialMedia: { name: string; url: string; image: string }[] = [
    {
      name: "instagram",
      url: "https://instagram.com/mi3lix9",
      image: "/icons/instagram.png",
    },
    {
      name: "telegram",
      url: "https://t.me/mi3li_blog",
      image: "/icons/telegram.svg",
    },
  ];
}
