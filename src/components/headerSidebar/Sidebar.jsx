import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const menus = [
  {
    id: 1,
    name: "Dashboard",
    icon: "fa-thin fa-thin fa-grid-horizontal",
    href: "/",
  },
  {
    id: 2,
    name: "Invest & Companies",
    icon: "fa-thin fa-money-bill",
    href: "/invest",
  },
  {
    id: 3,
    name: "Ranking",
    icon: "fa-thin fa-chart-simple",
    href: "/ranking",
  },
  {
    id: 4,
    name: "Upload",
    icon: "fa-thin fa-upload",
    href: "/upload",
  },
  {
    id: 5,
    name: "My Account",
    icon: "fa-thin fa-user",
    href: "/myaccount",
  },
];

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  return (
    <div className="flex">
      <div
        className={`bg-firstly h-screen transform transition-all duration-300 shadow-sm fixed lg:sticky top-0 left-0 ${
          isOpen
            ? "translate-x-0 z-50"
            : "-translate-x-full w-0 opacity-0 -z-10"
        }`}
      >
        <button
          className="absolute right-5 top-7 text-xl lg:hidden block"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <div className="px-5 py-6">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" className="w-8" alt="" />
            <h3 className="font-semibold">BirdShot</h3>
          </Link>
          <div className="mt-16">
            <p className="text-xs text-thirdly">Overview</p>
            {menus.map((el) => (
              <NavLink
                to={el.href}
                key={el.id}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 cursor-pointer my-10 text-fourthly"
                    : "flex items-center gap-2 cursor-pointer my-10"
                }
              >
                <p className="text-lg bg-sixthly w-8 h-8 rounded-full flex justify-center items-center">
                  <i className={`${el.icon}`} />
                </p>
                <p>{el.name}</p>
              </NavLink>
            ))}
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer absolute bottom-10"
            >
              <p className="text-lg bg-sixthly w-8 h-8 rounded-full flex justify-center items-center">
                <i className="fa-thin fa-right-from-bracket text-red-500" />
              </p>
              <p className="text-red-500">Logout</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-10/12 mx-auto">
        <div className="container mx-auto">
          <Header toggleSidebar={toggleSidebar} />
          <div className="my-10 px-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
