import { gql, useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import Input from "src/components/shared/input/input";
import styled from "styled-components";

const Dashboard: NextPage = () => {
  const { back, ...router } = useRouter();
  const [mutate, { loading, error }] = useMutation(ADD_PRODUCT_MUTAION);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [iconFile, setIconFile] = useState<File>();
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (iconFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIcon(reader.result as string);
      };
      reader.readAsDataURL(iconFile);
    } else {
      setIcon("");
    }
  }, [iconFile]);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (title || icon) {
      e.preventDefault();
      const { errors } = await mutate({
        variables: {
          store: router.asPath.split("/")[2],
          title: title.trim(),
          description: description.trim(),
          images: [icon],
        },
      });
      if (!errors) back();
    }
  }

  return (
    <div>
      {error ? <p>{error}</p> : null}
      <Form onSubmit={handleSubmit}>
        <Title>اسم المنتج</Title>
        <Input
          placeholder="اسم المنتج"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Title>وصف المنتج</Title>
        <TextArea
          placeholder="وصف المنتج"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Title>صورة المنتج</Title>
        <Img
          src={icon && icon !== "" ? icon : "/icons/Kushk-Logo-Orange.png"}
          onClick={() => fileInputRef.current?.click()}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files![0];
            if (file && file.type) {
              setIconFile(file);
            }
          }}
        />

        <Button disabled={!title || loading}>اضافة منتج</Button>
        {loading ? <p>جارٍ اضافة المنتج...</p> : null}
      </Form>
    </div>
  );
};

const ADD_PRODUCT_MUTAION = gql`
  mutation AddProduct(
    $store: String!
    $title: String!
    $images: [String!]!
    $description: String!
  ) {
    addProduct(
      store: $store
      data: { title: $title, images: $images, description: $description }
    ) {
      title
    }
  }
`;

export default Dashboard;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TextArea = styled.textarea`
  resize: none;
  border: 0;
  background: var(--background-secondary);
  padding: 10px;
  margin: 1rem 0;
  border-bottom: 3px solid var(--background-secondary);
  ::placeholder {
    user-select: none;
    opacity: 0.8;
  }

  :focus {
    border-bottom-color: var(--color-main);
    outline: 0;
    border-radius: 2px 2px 0px 0px;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background: var(--color-main);
  border: 0;
  height: 45px;
  font-size: 1rem;

  :disabled {
    background: gray;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
