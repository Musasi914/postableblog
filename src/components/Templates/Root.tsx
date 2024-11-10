import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Root() {
  const { isAuth } = useAuthContext();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="text-white bg-sky-500">
        <nav className="p-3">
          <ul className="flex gap-9 justify-center">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                投稿一覧
              </Link>
            </li>

            {isAuth ? (
              <>
                <li>
                  <Link to="/createpost">
                    <FontAwesomeIcon icon={faFilePen} className="mr-2" />
                    投稿記事
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    ログアウト
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="mr-2"
                  />
                  ログイン
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="bg-slate-100 pt-5 px-6">
        <Outlet />
      </main>
      <footer className="bg-black text-white text-center mt-10">footer</footer>
    </div>
  );
}
