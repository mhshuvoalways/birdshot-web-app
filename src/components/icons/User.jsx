const User = ({ className }) => {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <img src="/user.png" className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-semibold">John Doe</p>
        <p className="text-thirdly">Marketing Manager</p>
      </div>
    </div>
  );
};

export default User;
