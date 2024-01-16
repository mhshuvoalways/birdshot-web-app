const index = ({ className, placeholder }) => {
  return (
    <input
      type="text"
      className={`${className} rounded-full bg-firstly w-full outline-0 p-2`}
      placeholder={placeholder}
    />
  );
};

export default index;
