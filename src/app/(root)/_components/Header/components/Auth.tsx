import AuthItem from "./AuthItem";

function Auth() {
  return (
    <nav className="ml-auto">
      <ul className="flex gap-x-4">
        <AuthItem href="/auth/log-in" label="로그인" />
        <AuthItem href="/auth/sign-up" label="회원가입" />
      </ul>
    </nav>
  );
}

export default Auth;
