import React from "react";
import { useTheme } from "app/hooks/useTheme";
import { Site } from "site";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <header tw="bg-white dark:bg-gray-900 my-2 p-3 rounded-md flex items-center justify-between h-16 select-none">
      {/* <HeaderTitle /> */}
      <div tw="flex items-center gap-2">
        <img tw="w-10 rounded-full" src={Site.mainIcon} />
        <p tw="font-bold text-2xl">كشك</p>
      </div>

      <button onClick={() => toggleTheme()}>تغيير السمة</button>
    </header>
  );
};

export default Header;
