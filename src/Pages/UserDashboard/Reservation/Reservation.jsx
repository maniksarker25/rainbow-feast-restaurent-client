import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaWordpressSimple,
} from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Reservation = () => {
  return (
    <div>
      <SectionTitle heading={"BOOK A TABLE"} subHeading={"---Reservation---"} />
      <form className="w-10/12 mx-auto text-xl font-semibold bg-[#F3F3F3] px-4 lg:px-20 py-4 lg:py-8 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date?</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Time?</span>
            </label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Person</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select Person
              </option>
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex justify-center py-8">
          <button
            className="gradient-btn px-6 py-3 rounded-md  flex justify-center items-center gap-3"
            type="input"
          >
            Book A Table <FaCalendarAlt />
          </button>
        </div>
      </form>
      <SectionTitle subHeading={"---Visit Us---"} heading={"OUR LOCATION"} />
      <div className="w-10/12 mx-auto space-y-4 md:space-y-0  md:flex gap-4">
        <div className="w-full">
          <h5 className="bg-[#D1A054] flex justify-center py-3 text-4xl text-white">
            <FaPhoneSquareAlt />
          </h5>
          <div className=" bg-[#F3F3F3] h-36 w-full flex items-center justify-center ">
            <div className="text-center">
              <h3 className="font-semibold">PHONE</h3>
              <p>+88 017545458217</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h5 className="bg-[#D1A054] flex justify-center text-4xl py-3 text-white">
            <FaMapMarkerAlt />
          </h5>
          <div className=" bg-[#F3F3F3] h-36 flex items-center justify-center ">
            <div className="text-center">
              <h3 className="font-semibold">ADDRESS</h3>
              <p>Mirpur 01, Dhaka</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h5 className="bg-[#D1A054] flex justify-center text-4xl py-3 text-white">
            <FaWordpressSimple />
          </h5>
          <div className=" bg-[#F3F3F3] h-36 flex items-center justify-center ">
            <div className="text-center ">
              <h3 className="font-semibold">WORKINS TIME</h3>
              <p>Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
