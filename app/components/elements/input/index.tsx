import React from "react";
import tw from "twin.macro";

type InputType =
  | "text"
  | "checkbox"
  | "date"
  | "email"
  | "file"
  | "hidden"
  | "password";

type Props = {
  label: string;
  name: string;
} & (
  | ({ type: InputType } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ type: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
);

const Input: React.FC<Props> = (props) => {
  switch (props.type) {
    case "textarea":
      return (
        <Container>
          <Label htmlFor={props.name}>{props.label}</Label>
          <textarea {...props} id={props.id ?? props.name} name={props.name} />
        </Container>
      );

    default:
      return (
        <Container>
          <Label htmlFor={props.name}>{props.label}</Label>
          <input {...props} id={props.id ?? props.name} name={props.name} />
        </Container>
      );
  }
};

export default Input;

const Container = tw.div`flex flex-col space-y-2`;
const Label = tw.label`select-none font-medium`;
