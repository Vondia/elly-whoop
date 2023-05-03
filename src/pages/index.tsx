import { Board } from "@/components/board";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="pb-16">Elly whooop</div>
        <div className="pb-8">
          Dit is de link naar die gozer die ook een spelletje maakt:{" "}
          <a
            href="https://www.youtube.com/watch?v=wOVEe9eawXc&list=PLZlA0Gpn_vH_XnZHin-Vjma8KylU-N0X8&index=6"
            target="_blank"
          >
            youtube dude
          </a>
        </div>
        <div>
          <Board />
        </div>
      </div>
    </main>
  );
}
