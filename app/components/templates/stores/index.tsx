import { Store } from "app/features/stores/store";
import React from "react";

interface Props {
  stores: Store[];
}

const StoresTemplate: React.FC<Props> = ({ stores }) => {
  return (
    <div>
      <ul tw="space-y-1">
        {stores.map((store) => (
          <li tw="w-full rounded-xl bg-white dark:bg-gray-900 p-2.5 flex space-x-3 gap-3 justify-items-center items-center shadow-sm">
            <img src={store.icon} tw="w-16 h-16 rounded-full" />
            <div tw="space-y-2">
              <p tw="font-bold">{store.title}</p>
              <p tw="text-sm">{store.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoresTemplate;
