import React from "react";
import tw, { css, styled, theme } from "twin.macro";

const Near = () => {
  return (
    <div>
      <Input></Input>
      <input tw="bg-green-500"></input>
    </div>
  );
};

export default Near;

const Input = tw.input`bg-green-500 `;