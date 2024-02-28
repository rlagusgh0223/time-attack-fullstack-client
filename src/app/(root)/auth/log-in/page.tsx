import Modal from "@/components/Modal";

function page() {
  return (
    <div>
      <Modal title="로그인">
        이메일
        <input type="text" placeholder="이메일" name="id" className="" />
        <br />
        비밀번호
        <input type="password" placeholder="비밀번호" />
        <br />
        <button>로그인</button>
      </Modal>
    </div>
  );
}

export default page;
