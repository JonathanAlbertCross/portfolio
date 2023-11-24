import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav>
        <Image src="/rock.png" alt=" Logo" width={50} height={37} priority />
        <ul>
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <Image
          src="/hamburger_red.png"
          alt=" hamburger"
          width={26}
          height={37}
          priority
        />
      </nav>
      <div className="some-page-wrapper">
        <div className="row">
          <div className="column">
            <div className="blue-column">
              Some Text in Column One
              <Image
                src="/rock.png"
                alt=" Logo"
                width={500}
                height={37}
                priority
              />
            </div>
          </div>
          <div className="column">
            <div className="green-column">Some Text in Column Two</div>
          </div>
        </div>
      </div>
    </main>
  );
}
