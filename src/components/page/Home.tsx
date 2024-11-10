import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { useEffect, useState } from "react";
import { PostListTypes, PostWithId } from "../../type/postList";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const [postList, setPostList] = useState<PostListTypes>([]);
  const { isAuth } = useAuthContext();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      const posts = data.docs.map((doc) => {
        console.log(doc.data());
        return {
          ...doc.data(),
          id: doc.id,
        };
      }) as PostWithId[];
      setPostList(posts);
    };
    getPosts();
  }, []);

  const onClickDeleteDoc = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-7">投稿一覧</h1>
      <div className="max-w-2xl mx-auto space-y-5">
        {postList.map((post) => (
          <div
            key={post.id}
            className="post bg-white p-5 space-y-2 shadow-lg rounded-md"
          >
            <h2 className="text-xl">{post.title}</h2>
            <p className="break-words">{post.postsText}</p>
            <p>
              投稿者：{post.author.username} - {}
            </p>

            {isAuth && post.author.id === auth.currentUser?.uid && (
              <button
                onClick={() => onClickDeleteDoc(post.id)}
                className="text-red-500 border border-red-700 px-2"
              >
                削除
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
