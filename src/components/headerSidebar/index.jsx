import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

const Index = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
        {children}
      </Sidebar>
      {isOpen && (
        <p
          className="bg-secondly fixed inset-0 opacity-20 z-40 block lg:hidden"
          onClick={toggleSidebar}
        ></p>
      )}
    </>
  );
};

export default Index;
