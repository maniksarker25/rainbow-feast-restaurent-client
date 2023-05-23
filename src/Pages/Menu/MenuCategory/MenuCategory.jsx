import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, paragraph }) => {
  return (
    <div className="mt-20">
      {title && (
        <Cover coverImg={coverImg} title={title} paragraph={paragraph}></Cover>
      )}
      <div className="grid mt-16 md:grid-cols-2 gap-8 p-6 md-p-4 lg:p-0">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center flex flex-col items-center justify-center mt-8 ">
        <button className="border-b-4 py-2  rounded-br-lg rounded-bl-lg px-3 font-semibold border-black flex items-center ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
