import { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, setLoading,resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)
    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'You Have Been Login Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        setSuccess("User logged in successfully");
        form.reset();
        navigate(from, {replace:true})
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };


  // handle reset password ----
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    console.log(email)
    if (!email) {
      setError("Provide email for reset password");
    }
    resetPassword(email)
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div>
      <Helmet>
        <title>RainbowFeast-Login</title>
      </Helmet>
      <div className="hero h-[700px] bg-base-200 mt-20 shadow-lg">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-[55px] cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p onClick={handleResetPassword}><a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a></p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              {/* TODO: make  button disable with captcha condition */}
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className={disabled === true? ' bg-orange-200 py-3 font-bold  text-white':"bg-[#D1A054] py-3 font-bold cursor-pointer text-white"}
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            <div className="text-center -mt-3 mb-6">
              <p className="">
                New here?
                <Link className="text-[#D1A054] font-bold" to="/signUp">
                  SignUp
                </Link>
              </p>
            </div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
