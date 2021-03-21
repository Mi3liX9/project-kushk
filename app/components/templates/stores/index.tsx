import React from "react";
import tw from "twin.macro";
import { Store } from "app/features/stores/store";
import Link from "next/link";

interface Props {
  stores: Store[];
}

const StoresTemplate: React.FC<Props> = ({ stores }) => {
  return (
    <List>
      {stores.map((store) => (
        <Link href={"stores/" + store.id}>
          <ListItem>
            <ItemImage src={store.icon} />
            <ItemDetails>
              <p tw="font-bold">{store.title}</p>
              <p tw="text-sm">{store.description}</p>
            </ItemDetails>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default StoresTemplate;

const List = tw.ul`space-y-1 select-none list-none`;

const ListItem = tw.li`w-full rounded-xl bg-white dark:bg-gray-900 p-3 flex space-x-3 gap-3  items-center shadow-sm hover:ring ring-blue-500 cursor-pointer`;

const ItemImage = tw.img`w-16 h-16 rounded-full`;

const ItemDetails = tw.div`space-y-2`;
