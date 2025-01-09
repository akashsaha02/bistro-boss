import loginImg from '../assets/others/authentication1.png';
import facebookIcon from '../assets/icon/icons8-facebook.svg';
import githubIcon from '../assets/icon/icons8-github.svg';
import googleIcon from '../assets/icon/icons8-google.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { signOut, sendEmailVerification, updateProfile } from 'firebase/auth';
import { AuthContext } from '../providers/AuthProvider';
import auth from '../firebase/firebase.init';

const Register = () => {
  const { createUser }=useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photo.value;
    console.log(name,email,password,photoUrl);
   
    // setVerificationMessage('');

    // Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter.
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // Validate password
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter.');
      return;
    }

    // Create user using Auth Provider
    createUser(email, password)
      .then(userCredential => {

        // const user = userCredential.user;
        // send email verification address
        // sendEmailVerification(auth.currentUser)
        //     .then(() => {
        //         setVerificationMessage("Verification email sent");
        //     });
        // update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl
        }
        ).catch(error => {
          alert('Error updating user profile:', error.code, error.message);
        }
        );
        // Explicitly log the user out after registration
        signOut(auth)
          .catch(error => {
            console.error('Error logging out:', error.code, error.message);
          });

        
        alert('User registered successfully!');
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
        e.target.photo.value = '';
        navigate("/");
      }).catch(error => {
        const errorMessage = error.message;
        console.error('Error registering user:', errorMessage);
        alert('Error registering user!');
      });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white items-center">
        {/* Image Section */}
        <div className="hidden md:block order-2">
          <img src={loginImg} alt="login" className="w-full" />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center my-4">Register</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name" className="text-dark-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                autoComplete="on"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="photo" className="text-dark-2">Photo</label>
              <input
                type="url"
                id="photo"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                autoComplete="on"
                required
              />
            </div>
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




            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className='block text-center py-3 px-4 text-white font-semibold w-full rounded-lg my-4 bg-beige'
              >
                Register
              </button>
            </div>
          </form>

          <p className="text-beige text-center my-4">
            Already registered?{' '}
            <span
              onClick={() => navigate('/login')}
              className="font-semibold cursor-pointer"
            >
              Login Now
            </span>
          </p>
          <div className="flex items-center flex-col justify-center gap-4">
            <p>Or sign up with</p>
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
      </div >
    </div >
  )
}

export default Register