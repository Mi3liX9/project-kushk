import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

const components = {
  p: (props: any) => <P {...props} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  h5: (props: any) => <H5 {...props} />,
  h6: (props: any) => <H6 {...props} />,
  ul: (props: any) => <List {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  //   img: (props: any) => <Image {...props} width={props.width ?? "100%"} />,
};

export default {
  // The `name` is how you will invoke the component in your MDX
  components,
  // MDX's available options at time of writing pulled directly from
  // https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js
  //   mdxOptions: {
  //     remarkPlugins: [],
  //     rehypePlugins: [],
  //     compilers: [],
  //     filepath: "/some/file/path",
  //   },
  //   scope: {},
};

const TextStyles = css`
  padding: 0;
  margin: 5px 0px;
`;

const P = styled.p`
  ${TextStyles}
`;

const Link = styled.a`
  color: var(--color-primary);
  ::selection,
  :hover {
    text-decoration: underline;
    color: #eb5757;
  }
`;

const H1 = styled.h1`
  ${TextStyles}
`;

const H2 = styled.h2`
  ${TextStyles}
  font-size: 1.25rem;
`;

const H3 = styled.h3`
  ${TextStyles}
`;

const H4 = styled.h4`
  ${TextStyles}
`;

const H5 = styled.h5`
  ${TextStyles}
`;

const H6 = styled.h6`
  ${TextStyles}
`;

const List = styled.ul`
  margin-top: 0px;
  margin-bottom: 5px;
`;

const Blockquote = styled.blockquote`
  padding: 15px;
  margin: 5px 0;
  background: var(--blockquote-backgorund);
  border-radius: 1px;

  @media (min-width: 768px) {
    margin: 5px 5%;
  }
`;
