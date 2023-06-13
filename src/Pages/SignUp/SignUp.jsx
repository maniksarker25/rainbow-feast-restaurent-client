import { useContext, useState } from "react";
import loginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setError("");
    setSuccess("");
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        setSuccess("User created successfully");
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const savedUser = {name:data.name, email:data.email,role:'user'}
            fetch("http://localhost:5000/users",{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(savedUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User Created Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //   console.log(watch("example"));
  return (
    <>
      <Helmet>
        <title>RainbowFeast-SignUp</title>
      </Helmet>
      <div className="hero h-[700px] bg-base-200 mt-20 shadow-lg">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl ">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">photoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less then 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="form-control mt-6">
                <input
                  className="bg-[#D1A054] py-3 font-bold cursor-pointer text-white"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            <div className="text-center -mt-3 mb-6">
              <p className="">
                Already have an account?
                <Link className="text-[#D1A054] font-bold" to="/login">
                  SighUp
                </Link>
              </p>
            </div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
