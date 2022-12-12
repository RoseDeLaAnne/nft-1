import "./dist.css";

import Image from "next/image";
import Link from "next/link";

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
        <aside id="aside" className="fixed top-0 left-0 w-64 h-screen">
          <nav>
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/collections">Collections</Link>
              </li>
              <li>
                <Link href="/wallets">Wallets</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>

        <header id="header" className="fixed top-0 left-64 h-16 w-full">
          <div className="flex">
            <input type="text" placeholder="Search items, collections..." />
          </div>

          <div>{/* avatar here */}</div>
        </header>

        <div className="pl-64 pt-16">{children}</div>
      </body>
    </html>
  );
}
