import { gql, useMutation } from "@apollo/client";
import { NextPage } from "next";

const AddStorePage: NextPage = () => {
  const [mutate, { data, loading, error }] = useMutation(ADD_STORE_MUTAION);

  return (
    <div>
      <button
        onClick={() =>
          mutate({
            variables: { title: "test", description: "test", icon: "test" },
          })
        }
      >
        اضغطني عشان اضف تست
      </button>
      <pre>{JSON.stringify({ data, loading, error }, null, 2)}</pre>
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
