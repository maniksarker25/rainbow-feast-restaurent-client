const MenuCard = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className="bg-[#F3F3F3]">
      <img className="w-full" src={image} alt="" />
      <div className="p-6">
        <h6 className="text-2xl my-3 font-semibold">{name}</h6>
        <p >{recipe}</p>
        <button className="uppercase font-semibold mt-6 text-[#BB8506] bg-[#E8E8E8] px-6 py-3 rounded-lg border-b-2 border-[#BB8506]">Add To Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;
