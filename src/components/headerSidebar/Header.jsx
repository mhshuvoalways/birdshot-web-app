import SearchInput from "../input/SearchInput";
import IconItem from "../icons/IconItem";
import UserMenu from "./UserMenu";

const Header = ({ toggleSidebar }) => {
  return (
    <div className={`sticky top-0 z-10 bg-sixthly p-5`}>
      <div className="flex justify-between items-center gap-5">
        <div className="flex justify-between items-center gap-2 sm:gap-5 w-[70%]">
          <button className="text-xl block lg:hidden" onClick={toggleSidebar}>
            ☰
          </button>
          <SearchInput className="w-full" />
        </div>
        <div className="flex justify-end items-center gap-2 sm:gap-5 w-[30%]">
          <IconItem icon={"fa-solid fa-question"} />
          <IconItem icon={"fa-solid fa-bell"} />
          <i className="border h-10 border-thirdly hidden md:block"></i>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
