import { useContext } from "react";
import { FaFacebookSquare, FaGoogle, FaGithubSquare } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //handle google login
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const loggedInUser = result.user;
      //   console.log(loggedInUser)
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role:'user',
        photoURL:loggedInUser.photoURL
      };
      fetch("https://rainbow-feast-restaurant-server.vercel.app", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    })
    .catch(error=>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setLoading(false)
    })
  };
  return (
    <div className="text-center -mt-3">
      <p>Or sign in with</p>
      <div className="flex gap-8 items-center justify-center mt-2 mb-8">
        <FaFacebookSquare className="text-2xl cursor-pointer text-[#D1A054]" />
        <FaGoogle
          onClick={handleGoogleLogin}
          className="text-2xl cursor-pointer text-[#D1A054]"
        />
        <FaGithubSquare className="text-2xl cursor-pointer text-[#D1A054]" />
      </div>
    </div>
  );
};

export default SocialLogin;
