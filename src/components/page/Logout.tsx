import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();
  const logoutWithGoogle = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.clear();
      navigate("/login");
    });
  };
  return (
    <>
      <h1>ログアウト</h1>
      <p>ログアウトしてはじめる</p>
      <button onClick={logoutWithGoogle} className="bg-gray-500 underline">
        Googleでログアウト
      </button>
    </>
  );
}
