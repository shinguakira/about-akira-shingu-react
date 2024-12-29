import AnimatedText from "@/components/ui/animated-text";
import DownLoadLink from "@/components/ui/download-link";
import { links } from "@/constants";
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
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications.explore my latest projects and
            articles, shgowcasing my expertise in React and web development.
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              Download→
            </label>
            <DownLoadLink href={links.resumeLink} label="履歴書" />
            <DownLoadLink href={links.jobResumeLink} label="職務履歴書" />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label="English CV/Resume"
            />
          </div>
          <div>
            <Link
              href={`mailto:${emailAddress}`}
              target="_blank"
              className="text-lg font-medium text-black underline"
            >
              {`Contact ${emailAddress}`}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
