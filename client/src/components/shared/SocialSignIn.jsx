import useAuth from '../../hooks/useAuth';
import facebookIcon from '../assets/icon/icons8-facebook.svg';
import githubIcon from '../assets/icon/icons8-github.svg';
import googleIcon from '../assets/icon/icons8-google.svg';
import { useNavigate } from 'react-router-dom';

const SocialSignIn = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            await googleSignIn();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Logged in successfully with Google!',
            }).then(() => {
                navigate(from);
            });
        } catch (err) {
            setError(err.message || 'Error logging in with Google.');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message || 'Error logging in with Google. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex gap-4">
            <button
                onClick={handleGoogleSignIn}
                disabled={loading}
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
