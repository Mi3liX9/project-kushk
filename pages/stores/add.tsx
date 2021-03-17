import { gql, useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import Input from "app/components/shared/forms/input";
import { useStores } from "app/hooks/useStores";
import tw from "twin.macro";

const AddStorePage: NextPage = () => {
  const { push } = useRouter();
  const [mutate, { data, loading, error }] = useMutation(ADD_STORE_MUTAION);
  const { refetch } = useStores();
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
    e.preventDefault();
    if (title || icon) {
      const { errors } = await mutate({
        variables: {
          title: title.trim(),
          description: description.trim(),
          icon: icon.trim(),
        },
      });
      if (!errors) {
        await refetch();
        push("/");
      }
    }
  }

  return (
    <div>
      {error ? <p>{error}</p> : null}
      <form tw="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="اسم المتجر"
          name="name"
          type="text"
          placeholder="اسم المتجر"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          label="الوصف"
          name="description"
          type="textarea"
          placeholder="وصف المتجر"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div tw="flex flex-col gap-2">
          <Label>صورة المتجر</Label>
          <div tw="flex gap-5 items-center">
            <img
              tw="w-16 h-16 rounded-full"
              src={icon && icon !== "" ? icon : "/icons/Kushk-Logo-Orange.png"}
              onClick={() => fileInputRef.current?.click()}
            />
            <button
              tw="h-9 py-0 px-2 text-center border-2 border-gray-500 text-gray-500 font-medium"
              onClick={() => fileInputRef.current?.click()}
            >
              اضافة صورة
            </button>
          </div>
        </div>

        <input
          type="file"
          accept="image/png, image/jpeg"
          tw="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files![0];
            if (file && file.type) {
              setIconFile(file);
            }
          }}
        />

        <button
          tw="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 hover:disabled:bg-gray-500"
          disabled={!title || !icon || loading}
        >
          اضافة متجر
        </button>
        {loading ? <p>جارٍ اضافة المتجر...</p> : null}
      </form>
    </div>
  );
};

const ADD_STORE_MUTAION = gql`
  mutation AddStore($title: String!, $description: String, $icon: String!) {
    createStore(
      data: { title: $title, description: $description, icon: $icon }
    ) {
      title
      icon
    }
  }
`;

export default AddStorePage;

const Label = tw.label``;
