import "./dist.css";

import Image from "next/image";
import Link from "next/link";

import avatar_1 from "../assets/images/avatar_1.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <aside
          id="aside"
          className="fixed top-0 left-0 w-64 h-screen flex flex-col justify-between py-8 bg-white"
        >
          <nav>
            <ul>
              <li>
                <Link href="/dashboard">
                  <h1 className="text-lg font-medium">Dashboard</h1>
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <h1 className="text-lg font-medium">Marketplace</h1>
                </Link>
              </li>
              <li>
                <Link href="/collections">
                  <h1 className="text-lg font-medium">Collections</h1>
                </Link>
              </li>
              <li>
                <Link href="/wallets">
                  <h1 className="text-lg font-medium">Wallets</h1>
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <h1 className="text-lg font-medium">Logout</h1>
              </li>
            </ul>
          </nav>
        </aside>

        <header
          id="header"
          className="fixed top-8 left-64 h-16 w-full flex justify-between items-center px-8"
        >
          <div className="flex">
            <input
              type="text"
              placeholder="Search items, collections..."
              className="min-w-128 pt-4 pr-6 pb-4 pl-16 rounded-2xl"
            />
          </div>

          <div className="flex items-center">
            <img src={avatar_1} alt="" className="w-12 h-12 rounded-full" />
            <p className="text-lg font-medium ml-3">William Harry</p>
          </div>
        </header>

        <div className="pl-64 pt-32">{children}</div>
      </body>
    </html>
  );
}
