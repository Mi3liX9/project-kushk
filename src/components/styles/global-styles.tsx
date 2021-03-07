import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles } from "twin.macro";

export default function GlobalStylesComponent() {
  return (
    <>
      <GlobalStyles />
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    ${tw`bg-gray-100 dark:bg-black p-0 m-0 overflow-x-hidden`}; 
    direction: rtl;
    max-width: 100vw;
  }

  a {
    text-decoration: none;
  }
  p, h1, h2,h3,h4,h5,h6 {
    ${tw`text-gray-900 dark:text-gray-300`}
  }

  input {
    ${tw`border-2 border-transparent	focus:border-blue-600	p-2 select-none rounded-xl outline-none dark:bg-gray-900`}
  }

  * {
    ${tw`box-border`}
    font-family: "Tajawal";
    box-sizing: border-box;
    transition: all 150ms linear;
  }

  *::selection {
    ${tw`bg-blue-200 dark:bg-blue-700`}
  }
`;
