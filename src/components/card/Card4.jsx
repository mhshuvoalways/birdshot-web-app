const Card4 = () => {
  return (
    <div className="card">
      <img src="/images/card2.jpg" className="rounded-3xl" />
      <div className="flex justify-between items-center mt-5 gap-2 flex-wrap lg:flex-nowrap">
        <p className="bg-fifthly p-1.5 text-firstly rounded-xl w-full lg:w-auto text-center px-5">
          2024 Start Up
        </p>
        <p className="bg-fourthly p-1.5 text-firstly rounded-xl w-full lg:w-auto text-center px-5">Join</p>
      </div>
      <h4 className="font-semibold mt-2">Bump App</h4>
      <p className="text-lg font-semibold mt-3">
        Meet new friends with a simple touch!
      </p>
    </div>
  );
};

export default Card4;
