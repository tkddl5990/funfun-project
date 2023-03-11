import Image from "next/image";
import { Roboto } from "next/font/google";
import { Head } from "@components/Head";

const inter = Roboto({ weight: ["100", "300", "400", "500", "700", "900"] });

export default function Home() {
  return (
    <>
      <Head title="재미난거 해야지" />
      <main>
        <p>hello world</p>
      </main>
    </>
  );
}
