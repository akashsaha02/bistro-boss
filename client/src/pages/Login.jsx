import loginImg from '../assets/others/authentication1.png';
import facebookIcon from '../assets/icon/icons8-facebook.svg';
import githubIcon from '../assets/icon/icons8-github.svg';
import googleIcon from '../assets/icon/icons8-google.svg';
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha with 6 characters
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!validateCaptcha(captchaInput)) {
      setCaptchaError('Invalid captcha');
      return;
    }

    setCaptchaError('');
    console.log(email, password);
    // Proceed with login logic
  };

  const handleCaptchaValidation = () => {
    if (validateCaptcha(captchaInput)) {
      setDisable(false);
      setCaptchaError('');
    } else {
      setDisable(true);
      setCaptchaError('Invalid captcha');
    }
  };

  const handleNewAccountClick = () => {
    navigate('/register');
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white items-center">
        {/* Image Section */}
        <div className="hidden md:block">
          <img src={loginImg} alt="login" className="w-full" />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center my-4">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-dark-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                autoComplete="on"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password" className="text-dark-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                autoComplete="on"
                required
              />
            </div>

            {/* Captcha */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="captcha" className="text-dark-2">
                <LoadCanvasTemplate />
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter Captcha"
                  className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                  autoComplete="off"
                  required
                />
                <button
                  type="button"
                  onClick={handleCaptchaValidation}
                  className="text-white bg-beige rounded-lg px-2 py-1"
                >
                  Validate
                </button>
              </div>
              {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={disable}
                className={`block text-center py-3 px-4 text-white font-semibold w-full rounded-lg my-4 ${
                  disable ? 'bg-gray-300 cursor-not-allowed' : 'bg-beige'
                }`}
              >
                Login now
              </button>
            </div>
          </form>

          <p className="text-beige text-center my-4">
            New Here?{' '}
            <span
              onClick={handleNewAccountClick}
              className="font-semibold cursor-pointer"
            >
              Create New Account
            </span>
          </p>
          <div className="flex items-center flex-col justify-center gap-4">
            <p>Or sign in with</p>
            <div className="flex gap-4">
              <button type="button" className="p-4 border rounded-full">
                <img src={googleIcon} alt="google" className="w-6" />
              </button>
              <button type="button" className="p-4 border rounded-full">
                <img src={facebookIcon} alt="facebook" className="w-6" />
              </button>
              <button type="button" className="p-4 border rounded-full">
                <img src={githubIcon} alt="github" className="w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;