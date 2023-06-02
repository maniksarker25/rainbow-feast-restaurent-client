import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    fetch(image_hosting_url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgResponse=>{
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name,price,category,recipe} = data;
        const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL};
        console.log(newItem)
        axiosSecure.post('/menu', newItem)
        .then(data=>{
          // console.log('after posting new menu item', data.data)
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Item successfully Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };
  // console.log(errors);
  return (
    <div>
      <SectionTitle
        subHeading={"---What's new?---"}
        heading={"Add Item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F6F6F6] p-8  w-10/12 mx-auto"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-xl">
              Recipe Name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold ">
                Category*
              </span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
              <option>west bengal</option>
              
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Recipe Details*
            </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-44"
            placeholder="Details description"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Item Image*
            </span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button
          type="submit"
          className="add-item-btn text-white flex items-center gap-2 font-bold px-8 py-3  rounded-md my-6 "
        >
          Add Item <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
