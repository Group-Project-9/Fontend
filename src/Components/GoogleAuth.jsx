import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../App/User/userSlice";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleAuth = async () => {
        try {
            const provider = new GoogleAuthProvider(app);
            const auth = getAuth();
            const result = await signInWithPopup(auth, provider);

            console.log(result);
            
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: result.user.displayName, 
                    email: result.user.email, 
                    photo: result.user.photoURL 
                })
            });
            const data = await res.json();
            dispatch(loginSuccess(data));
            navigate('/');

        } catch (error) {
            console.log(`Could not sign in with Google: ${error.message}`)
        }
    }

    return (
        <button 
            type="button"
            onClick={handleGoogleAuth}
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Continue with Google
        </button>
  )
}

export default GoogleAuth;