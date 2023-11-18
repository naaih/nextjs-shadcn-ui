"use client";
import Image from "next/image";
// import { ModeToggle } from "./toggle-theme";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="vercel logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </li>
          {/* <li>
            <ModeToggle/>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
