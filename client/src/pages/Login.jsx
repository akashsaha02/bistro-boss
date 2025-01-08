import loginImg from '../assets/others/authentication1.png'
import facebookIcon from '../assets/icon/icons8-facebook.svg'
import githubIcon from '../assets/icon/icons8-github.svg'
import googleIcon from '../assets/icon/icons8-google.svg'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()









  const handleNewAccountClick = () => {
    navigate('/register')
  }
  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white items-center">
        {/* image section */}
        <div className=" ">
          <img src={loginImg} alt="login" className="w-full" />
        </div>
        {/* form section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center my-4">Login</h2>
          <form className='space-y-2'>
            {/* Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-dark-2">Email</label>
              <input
                type="email"
                id="email"
                name="name"
                placeholder="Enter your email"
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                autoComplete='on'
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
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                autoComplete='on'
              />
            </div>

            <input
              type="text"
              id="id"
              name="name"
              placeholder="placeholder"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
            /><input
              type="text"
              id="id"
              name="name"
              placeholder="placeholder"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
            />
            <button type="submit" className="block text-center py-3 px-4 text-white font-semibold bg-beige w-full rounded-lg">Login now</button>

          </form>
          <p className="text-beige text-center my-4">New Here? <span onClick={() => handleNewAccountClick()} className="font-semibold cursor-pointer">Create New Account</span></p>
          <div className="flex items-center flex-col justify-center gap-4">
            <p className="">Or sign in with</p>
            <div className=" flex gap-4">
              <button type="" className="p-4 border rounded-full">
                <img src={googleIcon} alt="google" className="w-6" />
              </button>
              <button type="" className="p-4 border rounded-full">
                <img src={facebookIcon} alt="facebook" className="w-6" />
              </button>
              <button type="" className="p-4 border rounded-full">
                <img src={githubIcon} alt="github" className="w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
