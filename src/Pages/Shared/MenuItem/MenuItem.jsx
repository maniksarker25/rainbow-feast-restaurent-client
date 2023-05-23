

const MenuItem = ({item}) => {
    const {image,name,recipe,price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;