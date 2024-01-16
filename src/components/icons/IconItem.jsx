const IconItem = ({ icon }) => {
  return (
    <p className="flex justify-center items-center border-hidden lg:border-solid border-2 border-thirdly w-9 h-9 text-thirdly cursor-pointer rounded-full">
      <i className={icon}></i>
    </p>
  );
};

export default IconItem;
