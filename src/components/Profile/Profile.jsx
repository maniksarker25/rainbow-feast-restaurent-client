import { Menu } from "@headlessui/react";

const Profile = ({ user,handleLogOut }) => {
  return (
    <Menu>
      <Menu.Button>
        {user.photoURL ? (
          <img
            title={user?.displayName}
            className="w-8 h-8 rounded-full mr-4 cursor-pointer"
            src={user?.photoURL}
          ></img>
        ) : (
          <img
            title={user?.displayName}
            className="w-10 mr-2 cursor-pointer rounded-full"
            src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
          ></img>
        )}
      </Menu.Button>
      <Menu.Items className="absolute top-16 right-6 z-30 bg-black text-white text-xl flex flex-col p-8 rounded-lg space-y-3">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
            >
              {user?.displayName}
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
            >
              {user?.email}
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">
            <button onClick={handleLogOut}>
              LogOut
            </button>
          </span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Profile;
