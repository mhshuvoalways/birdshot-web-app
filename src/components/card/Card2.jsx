import User from "../icons/User";

const card2 = () => {
  return (
    <div className="card">
      <img src="/images/card2.jpg" className="rounded-3xl" />
      <div className="w-full sm:w-40 flex justify-center items-center gap-3 bg-fourthly text-firstly py-1.5 px-3 mt-4 rounded-xl">
        <i className="fa-solid fa-pen text-xs"></i>
        <p className="text-xs">Application Review</p>
      </div>
      <h4 className="font-semibold mt-3">Bumb App Review</h4>
      <User className={"mt-5"} />
    </div>
  );
};

export default card2;
