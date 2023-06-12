import { FaMarker } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddReview = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"---Sharing is Caring!!!---"}
        heading={"GIVE A REVIEW..."}
      ></SectionTitle>
      <div className="w-10/12 mx-auto bg-[#F3F3F3] px-8  md:px-20 py-12 md:py-16">
        <h3 className="text-3xl font-semibold mb-12 text-center">RATE US!</h3>
       <form>
         <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">
              What is your favourite menu?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
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
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Kindly express your care in a short way.</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-36"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <button className="gradient-btn px-8 py-3 mt-8 text-white font-semibold flex items-center gap-3 rounded-md">Send Review <FaMarker/></button>
       </form>
      </div>
    </div>
  );
};

export default AddReview;
