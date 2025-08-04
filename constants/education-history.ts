export interface MultilingualEducationHistoryProps {
  startYear: string;
  endYear: string;
  ja: {
    school: string;
    department: string;
    description: string;
  };
  en: {
    school: string;
    department: string;
    description: string;
  };
}

export const educationHistory: MultilingualEducationHistoryProps[] = [
  {
    startYear: "2018/44",
    endYear: "2022/4(退学)",
    ja: {
      school: "茨城大学",
      department: "工学部情報工学科",
      description:
        "情報工学科は、プログラミングやネットワークなど情報に関わる物事を、情報科学と比べより、実用的に学ぶ学科。JABEE認定を受けている学科であり、卒業とともに技術士の1次試験を免除可能になる。",
    },
    en: {
      school: "Ibaraki University",
      department:
        "Faculty of Engineering, Department of Computer and Information Sciences",
      description:
        "The Department of Computer and Information Sciences focuses on practical applications of programming, networking, and other information technology fields compared to information science. It is JABEE-accredited, which exempts graduates from the first stage of the Professional Engineer examination.",
    },
  },
  {
    startYear: "2016/4",
    endYear: "2018/3",
    ja: {
      school: "対馬高校",
      department: "普通科",
      description:
        "地元の高校。普通科のほかには、商業科、国際文化交流科(韓国語)が存在",
    },
    en: {
      school: "Tsushima High School",
      department: "General Studies",
      description:
        "Local high school. In addition to General Studies, it also offers Commercial Studies and International Cultural Exchange (Korean language) departments.",
    },
  },
];
