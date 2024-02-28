"use client";

import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    logOut();
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isLoggedIn ? (
        <button
          className="bg-white text-sm text-black px-5 py-2 rounded font-semibold"
          onClick={handleClickLogOut}
        >
          로그아웃
        </button>
      ) : (
        <>
          <Link
            href="/auth/sign-up"
            className="bg-white text-sm text-black px-5 py-2 rounded font-semibold"
          >
            {" "}
            회원가입하기
          </Link>
          <button
            className="bg-white text-sm text-black px-5 py-2 rounded font-semibold"
            onClick={handleClickLogIn}
          >
            로그인하기
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
