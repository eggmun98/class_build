/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp_deploy-project",

  // 아래 주소들만 out 폴더에 만들어줘!! (getServerSideProps 있는 페이지는 제외)
  // 즉 아래에 있는 주소들만 빌드가 됨
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
