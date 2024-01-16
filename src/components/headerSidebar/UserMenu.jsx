import { Menu, Transition } from "@headlessui/react";

export default function UserMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 cursor-pointer">
        <img src="/user.png" className="w-10 h-10 rounded-full" />
        <p className="font-semibold hidden md:block">John Doe</p>
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-firstly shadow-lg ring-1 ring-secondly/5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-fourthly text-firstly" : "text-secondly"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <i
                      className="fa-thin fa-user mr-2 h-5 w-5 mt-1.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <i
                      className="fa-thin fa-user mr-2 h-5 w-5 mt-1.5"
                      aria-hidden="true"
                    />
                  )}
                  My Account
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-fourthly text-firstly" : "text-secondly"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <i className="fa-thin fa-right-from-bracket mr-2 h-5 w-5 mt-1.5" />
                  ) : (
                    <i className="fa-thin fa-right-from-bracket mr-2 h-5 w-5 mt-1.5" />
                  )}
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
