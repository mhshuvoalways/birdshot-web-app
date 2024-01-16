const index = ({ day }) => {
  return (
    <div>
      <img
        src="images/appreview.jpg"
        className="w-full rounded-3xl object-cover"
      />
      <h4 className="font-medium mt-2">{day}</h4>
    </div>
  );
};

export default index;
