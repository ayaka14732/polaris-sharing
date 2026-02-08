import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["zh-CN", "zh-TW", "en"],
  defaultLocale: "zh-CN",
});

export const config = {
  matcher: ["/", "/(zh-CN|zh-TW|en)/:path*"],
};
