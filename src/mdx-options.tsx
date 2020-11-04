import React from "react";

const components = {
  h2: (props: any) => <h6 {...props} />,
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
