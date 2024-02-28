"use client";

import Page from "@/components/Page";

function SignUpPage() {
  return (
    <Page>
      <h2 className="font-bold text-2xl">회원으로 가입하기</h2>
      이메일
      <input className="border" type="text" />
      <br />
      비밀번호
      <input className="border" type="password" />
      <br />
      비밀번호 확인
      <input className="border" type="password" />
      <br />
      <button>회원가입</button>
    </Page>
  );
}

export default SignUpPage;
