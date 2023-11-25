import Image from "next/image";
import "../app/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  return (
    <main className={inter.className}>
      {/*   <nav>
        <Image src="/rock.png" alt=" Logo" width={50} height={37} priority />

        <ul>
          <Link href="/projects">
            <li>PROJECTS</li>
          </Link>

          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <Image
          src="/hamburger_red.png"
          alt="hamburger"
          width={26}
          height={37}
          priority
        />
      </nav>
      */}
      <div className="some-page-wrapper">
        <div className="row">
          <div className="column">
            <div className="centeredContent">
              {/*  <div className="blue-column"> */}{" "}
              <Image
                src="/fullLogo.png"
                alt=" Logo"
                width={500}
                height={37}
                priority
              />
            </div>
          </div>
        </div>
        <div className="column">
          {/*   <div className="green-column"></div>*/}
          {/*  </div>*/}
        </div>
      </div>
    </main>
  );
}
