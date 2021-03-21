import { darkThemeFunc } from "app/hooks/useTheme";
import Head from "next/head";
import React from "react";
import { Site } from "site";

const MyHead: React.FC = () => (
  <Head>
    <script
      dangerouslySetInnerHTML={{
        __html: darkThemeFunc,
      }}
    />
    <title>{Site.siteName}</title>
    <link rel="shortcut icon" href={Site.mainIcon} />
  </Head>
);

export default MyHead;
