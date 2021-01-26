import { Site } from "site";

const metatags = [
  { property: "description", content: Site.description },
  // Facebook / Opengraph
  { property: "og:type", content: "website" },
  { property: "og:url", content: Site.url },
  { property: "og:title", content: Site.name },
  { property: "og:description", content: Site.description },
  { property: "og:image", content: Site.url + Site.mainIcon },
  // Twitter
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:url", content: Site.url },
  { property: "twitter:title", content: Site.name },
  { property: "twitter:description", content: Site.description },
  { property: "twitter:image", content: Site.url + Site.mainIcon },
];
