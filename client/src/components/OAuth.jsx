import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom'; 

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    avatar: result.user.photoURL
                })
            });

            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data['message']));
                return;
            }

            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log("Could not sign in with Google! ", error);
        }
    }

    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ' >
            Continue with google
        </button>
    )
}

export default OAuth
