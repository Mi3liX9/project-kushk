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
    padding: 0;
    margin: 0;
    font-family: "Tajawal", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    direction: rtl;
    overflow-x: hidden;
    max-width: 100vw;
    ${tw`bg-gray-100 dark:bg-black p-0 m-0 overflow-x-hidden text-gray-900 dark:text-gray-300`}
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='number'],
  input[type='url'],
  input[type='date'],
  input[type='datetime-local'],
  input[type='month'],
  input[type='week'],
  input[type='time'],
  input[type='search'],
  input[type='tel'],
  input[type='checkbox'],
  input[type='radio'],
  textarea
  {
      ${tw`border border-transparent focus:ring-blue-500 p-2 select-none rounded-sm outline-none dark:bg-gray-900 resize-none`}
    }

  /* select
select[multiple] */


  a {
    color: inherit;
    text-decoration: none;

  }


  button {
    ${tw`p-2 rounded-sm text-gray-100 disabled:cursor-auto`}
}

  * {
    box-sizing: border-box;
    transition: all 150ms linear;
    color: var(--text-color);
    font-family: "Tajawal";
    -webkit-tap-highlight-color: transparent;

  }

  *::selection {
    ${tw`bg-blue-200 dark:bg-blue-700`}
  }
`;
