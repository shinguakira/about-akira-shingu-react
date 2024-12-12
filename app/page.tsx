import AnimatedText from "@/components/ui/animated-text";
import { LinkArrow } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import profilePic from "public/images/profile/developer-pic-1.png";

// temrary defined email address. need to move to const file or defined as env variable
const emailAddress = "akirashingu1022@gmail.com";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
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
              href="https://drive.google.com/file/d/13UfA3q2rg-kfatbmdMOemuFqi_v9fG36/view?usp=drive_link"
              target={"_blank"}
              className="flex items-center rounded-lg border-transparent bg-black p-3 px-6 text-sm font-semibold text-white hover:border-black"
              download={true}
            >
              <LinkArrow className="ml-2 w-12" />
              履歴書
            </Link>
            <Link
              href="https://drive.google.com/file/d/1FD0CRnMbGqFSo9L3fgp4RWmUnlwUlHby/view?usp=drive_link"
              target={"_blank"}
              className="flex items-center rounded-lg border-transparent bg-black p-3 px-6 text-lg font-semibold text-white hover:border-black"
              download={true}
            >
              <LinkArrow className="ml-2 w-12" />
              職務履歴書
            </Link>
            <Link
              href={emailAddress}
              target="_blank"
              className="ml-4 text-lg font-medium text-black underline"
            >
              {`Contact ${emailAddress}`}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
