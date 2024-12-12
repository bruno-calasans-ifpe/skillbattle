import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // const session = await getServerSession();

  // if (pathname.startsWith("/login")) {
  //   if (session) return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (pathname.startsWith("/dashboard")) {
  //   if (!session) return NextResponse.redirect(new URL("/", request.url));
  // }
}
