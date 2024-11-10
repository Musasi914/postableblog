import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      localStorage.setItem("isAuth", "true");
      navigate("/");
    });
  };
  return (
    <>
      <h1>ログイン</h1>
      <p>ログインしてはじめる</p>
      <button onClick={loginWithGoogle} className="bg-gray-500 underline">
        Googleでログイン
      </button>
    </>
  );
}
