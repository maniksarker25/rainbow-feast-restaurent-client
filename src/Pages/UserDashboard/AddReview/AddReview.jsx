import { FaMarker } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const handleAddReview = (event)=>{
        event.preventDefault();
        const form = event.target;
        const menu = form.menu.value;
        const rating = form.rating.value;
        const details = form.description.value;
        const review = {menu,rating,details,costumerName:user?.displayName};
        axiosSecure.post('/add-review',review)
        .then(data=>{
            if(data.data.insertedId){
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

  return (
    <div>
      <SectionTitle
        subHeading={"---Sharing is Caring!!!---"}
        heading={"GIVE A REVIEW..."}
      ></SectionTitle>
      <div className="w-10/12 mx-auto bg-[#F3F3F3] px-8  md:px-20 py-12 md:py-16">
        <h3 className="text-3xl font-semibold mb-12 text-center">RATE US!</h3>
       <form onSubmit={handleAddReview}>
         <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">
              What is your favourite menu?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="menu"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Give rating?</span>
          </label>
          <input
            type="number"
            max={5}
            placeholder="Type here"
            name="rating"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Kindly express your care in a short way.</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-36"
            placeholder="Description"
            name="description"
            required
          ></textarea>
        </div>

        <button  className="gradient-btn px-8 py-3 mt-8 text-white font-semibold flex items-center gap-3 rounded-md">Send Review <FaMarker/></button>
       </form>
      </div>
    </div>
  );
};

export default AddReview;
