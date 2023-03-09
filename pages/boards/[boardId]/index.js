import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();

  return (
    <>
      <div>안녕하세요 게시판상세 동적페이지입니다.</div>
      <div>게시글아이디: {router.query.boardId}</div>
    </>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드 렌더링을 하는 페이지라면? out 폴더로 생성 불가
  // 즉 yarn build:ssg 명령어를 입력하면 오류 생김
  // 즉 out 폴더 생성 불가
};
