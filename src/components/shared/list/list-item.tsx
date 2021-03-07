import React from "react";
import tw from "twin.macro";

interface Props {
  icon?: string;
  iconRadius?: string;
}

const ListItem: React.FC<Props> = ({ children, icon }) => {
  return (
    <Item>
      {icon ? <Icon src={icon} /> : null}
      <Children>{children}</Children>
    </Item>
  );
};

export default ListItem;

const Item = tw.li`flex bg-white dark:bg-gray-900 hover:bg-blue-300 dark:hover:bg-blue-700
   select-none cursor-pointer items-center p-3 gap-5 rounded-2xl`;

const Children = tw.div`flex gap-x-4 gap-y-5 flex-wrap`;

const Icon = tw.img`object-cover h-16 w-16 rounded-full`;
