import AnimatedText from "@/components/ui/animated-text";
import { LinkArrow } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import profilePic from "public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div>
          <Image src={profilePic} alt="alt" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            As a skilled full-stacj developer, I am dedicated to turning ideas
            into innovative web applications.explore my latest projects and
            articles, shgowcasing my expertise in React and web development.
          </p>
          <div className="mt-2 flex items-center self-start">
            <Link
              href="/dummy.pdf"
              target={"_blank"}
              className="flex items-center rounded-lg border-transparent bg-black p-3 px-6 text-lg font-semibold text-white hover:border-black"
              download={true}
            >
              Resume
              <LinkArrow className="ml-2 w-6" />
            </Link>
            <Link
              href="mailto:acd@gmail.com"
              target="_blank"
              className="ml-4 text-lg font-medium capitalize text-black underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
