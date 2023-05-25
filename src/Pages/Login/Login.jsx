import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
  const [disabled,setDisabled] = useState(true)
  const captchaRef = useRef(null)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = ()=>{
      const user_captcha_value = captchaRef.current.value;
      if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
      }
      else{
          setDisabled(true)
      }
    }
  return (
    <div>
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
                  name='email'
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name='captcha'
                  required
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                />
                <button onClick={handleValidateCaptcha}>Validate</button>
              </div>
              <div className="form-control mt-6">
                <input  disabled={disabled} className='bg-[#D1A054] py-3 font-bold cursor-pointer text-white' type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
