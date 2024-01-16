const index = () => {
  return (
    <div className="card flex items-center gap-10 justify-between shadow-sm w-full">
      <div className="flex items-center gap-2 flex-wrap">
        <img src="/user.png" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-thirdly">Lorem Ipsum</p>
          <h4 className="font-semibold">Lorem Ipsum</h4>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis-vertical text-3xl text-thirdly cursor-pointer"></i>
    </div>
  );
};

export default index;
