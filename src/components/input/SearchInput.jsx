import Input from "./index";

const SearchInput = ({ className, header }) => {
  return (
    <div
      className={`${className} flex items-center ${
        header ? "sm:bg-firstly" : "bg-firstly"
      } rounded-full pl-3 gap-1`}
    >
      <i className="fa-regular fa-magnifying-glass"></i>
      <Input
        placeholder="Search"
        className={`${header && "hidden sm:block"}`}
      />
    </div>
  );
};

export default SearchInput;
