const Progress = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-between gap-2`}>
      <div className="relative bg-secondly py-2 w-full rounded-full">
        <p className="bg-fourthly absolute top-0 left-0 w-8/12 py-2 rounded-full"></p>
      </div>
      <p className="font-semibold">7/10</p>
    </div>
  );
};

export default Progress;
