"use client";

import Page from "@/components/Page";

function SignUpPage() {
  return (
    <Page>
      <h2 className="font-bold text-2xl">회원으로 가입하기</h2>
      이메일
      <input placeholder="이메일" />
      <br />
      비밀번호
      <input placeholder="비밀번호" />
      <br />
      비밀번호 확인
      <input placeholder="비밀번호 확인" />
      <br />
      <button>회원가입</button>
    </Page>
  );
}

export default SignUpPage;
