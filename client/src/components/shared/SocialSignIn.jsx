import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import facebookIcon from '../../assets/icon/icons8-facebook.svg';
import githubIcon from '../../assets/icon/icons8-github.svg';
import googleIcon from '../../assets/icon/icons8-google.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialSignIn = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {

        try {
            googleSignIn().then((res) => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role:'normal'
                }
                axiosPublic.post('/users', userInfo).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Logged in successfully with Google!',
                        }).then(() => {
                            navigate(from);
                        });
                    }
                })
            })


        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message || 'Error logging in with Google. Please try again.',
            });
        }
    };
    return (
        <div className="flex gap-4">
            <button
                onClick={handleGoogleSignIn}
                type="button"
                className="p-4 border rounded-full"
            >
                <img src={googleIcon} alt="google" className="w-6" />
            </button>
            <button type="button" className="p-4 border rounded-full">
                <img src={facebookIcon} alt="facebook" className="w-6" />
            </button>
            <button type="button" className="p-4 border rounded-full">
                <img src={githubIcon} alt="github" className="w-6" />
            </button>
        </div>
    )
}

export default SocialSignIn
