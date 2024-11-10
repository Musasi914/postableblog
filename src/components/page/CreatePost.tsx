import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, []);

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    setTitle("");
    setPostText("");
    navigate("/");
  };
  return (
    <>
      <h1 className="mb-5 text-3xl text-center">記事投稿画面</h1>
      <fieldset className="space-y-6 max-w-lg mx-auto">
        <div>
          <label className="grid">
            タイトル
            <input
              type="text"
              placeholder="タイトルを入力"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="grid">
            投稿
            <textarea
              placeholder="内容を入力"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div>
          <button
            className="border bg-gray-300 p-2 rounded-sm"
            onClick={createPost}
          >
            投稿する
          </button>
        </div>
      </fieldset>
    </>
  );
}
