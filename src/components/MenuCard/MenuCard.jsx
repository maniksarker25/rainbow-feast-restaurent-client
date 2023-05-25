const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="bg-[#F3F3F3] text-center">
      <div className=" relative ">
        <img className="w-full" src={image} alt="" />
        <p className="bg-[#111827] py-3 text-white text-center font-semibold px-6 absolute top-3 right-3">
          ${price}
        </p>
      </div>
      <div className="p-6">
        <h6 className="text-2xl my-3 font-semibold">{name}</h6>
        <p>{recipe}</p>
        <button className="uppercase font-semibold mt-6 text-[#BB8506] bg-[#E8E8E8] px-6 py-3 rounded-lg border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
