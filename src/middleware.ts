import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("미들웨어 실행 중");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로 리다이렉팅");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정 경로에만 미들웨어가 수행할 수 있게 설정
export const config = {
  matcher: ["/products/:path+"],
};
