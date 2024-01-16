import Progress from "../utils/Progress";

const Card3 = () => {
  return (
    <div className="card">
      <img src="/images/card3.jpg" className="rounded-3xl" />
      <div className="w-full sm:w-40 flex justify-center items-center gap-3 bg-fourthly text-firstly py-1.5 px-3 mt-4 rounded-xl">
        <i className="fa-solid fa-pen text-xs"></i>
        <p className="text-xs">Application Review</p>
      </div>
      <h4 className="font-semibold mt-3">Bumb App Review</h4>
      <Progress className={"mt-3"} />
    </div>
  );
};

export default Card3;
