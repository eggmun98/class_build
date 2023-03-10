import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();

  return (
    <>
      <div>안녕하세요 게시판상세 동적페이지입니다.</div>
      <div>게시글아이디: {router.query.boardId}</div>
      <div>왜 안나오니</div>
    </>
  );
}

// export const getServerSideProps = () => {
//   // 만약 서버사이드 렌더링을 하는 페이지라면? out 폴더로 생성 불가
//   // 즉 yarn build:ssg 명령어를 입력하면 오류 생김
//   // 즉 out 폴더 생성 불가

//   // 그래서 어떻게 해야하는가?? 이런 경우는 next.config.js에서 exportPathMap 으로 현재 페이지 제외시키기
// };
