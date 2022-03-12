import React, { useEffect, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";
import BaseLayout from "../layouts/BaseLayout";

function Teams() {
  const [teams, set_teams] = useState([
    {
      name: "Olin Beatty I",
      role: "Principal Integration Developer",
      community: "Hessel, Parker and Hermiston",
      description: "Kaycee Abernathy Sr.",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/conspirator/128.jpg",
      twitter: "354R45OZR9NLJWZMPOQCO6K93W7CGGV546",
      linkedin: "19ULWXQ2451GA1FSIEIKY4XCGGPQPW",
      website: "1T2UCV33Z7TF2IQIK6WP4PNJW0D",
    },
    {
      name: "Lysanne Beier Jr.",
      role: "Principal Applications Facilitator",
      community: "West Group",
      description: "Zena Bergnaum",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/davidbaldie/128.jpg",
      twitter: "3IXXTETT38YEOAKKOZ4QME7RW553IKM",
      linkedin: "3626R493VZE71RDNSY9VABULD6B",
      website: "3C1B2CTX8XORX35A7B86JGT837C3IE",
    },
    {
      name: "Louie Wolff",
      role: "National Implementation Analyst",
      community: "Altenwerth - Huels",
      description: "Alphonso Ebert",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/linkibol/128.jpg",
      twitter: "39YH6KHJL4GNYWG1LUYU7M9X22BQJ",
      linkedin: "3VSX5J9GMFNWO0I6F48LGLCK052U7PDF",
      website: "13JCOX4LGL4AC7KPH1ROWB9XDECYNLYMY2",
    },
    {
      name: "Cassidy Fay",
      role: "Product Identity Consultant",
      community: "Lesch Group",
      description: "Sandrine Kihn",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/salimianoff/128.jpg",
      twitter: "1OFSEJSF744XLWOP34AYVR1B9P9Y",
      linkedin: "1Q27PWKZQWLLCB740QQ1TYGSOP09BQ0D5",
      website: "30KDKY2720BZP85D4FGGDG62WWANT008",
    },
    {
      name: "Miss Ted Koepp",
      role: "National Implementation Orchestrator",
      community: "Wyman - Cole",
      description: "Roslyn Heidenreich",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg",
      twitter: "3CD8G5GEOWKJDGB40OPBZW167E00",
      linkedin: "1NRYQ98RSTT6CYIDENIGMM1ZEA47CFBQ9",
      website: "3VZIGRY776EF6FPUIGGHGCTNTEDGNNE0W",
    },
    {
      name: "Zachary Simonis",
      role: "Regional Optimization Orchestrator",
      community: "Koepp, Hettinger and Tremblay",
      description: "Domenico Breitenberg",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/hasslunsford/128.jpg",
      twitter: "1SB4P7NFKW3NDZUZX59F3H6BLXS63OTF00",
      linkedin: "13597RT8DOQ5HNJQKAU9W32BSY1XQ4",
      website: "1ZO77TGCCT2DO3BWTCEBXY1H6KV83LW",
    },
    {
      name: "Eldred Skiles",
      role: "Chief Quality Specialist",
      community: "Bruen, Kilback and Bashirian",
      description: "Jarod Abernathy",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/themadray/128.jpg",
      twitter: "1CXRO9MWK0JTPHN41Z4E8RU30Q6DM6",
      linkedin: "3VFAPQ1064F5HQA6U1A8EE3R5SPP2H15GO",
      website: "1JR2IW5MEJ946IJ8D8W26SW0QG19",
    },
    {
      name: "Ted Miller DVM",
      role: "Principal Implementation Strategist",
      community: "Walker - Tillman",
      description: "Brenna Prosacco",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg",
      twitter: "1X7B7BATSSF20EIBEBRLN43K1GBZ8868",
      linkedin: "3TKMKNR7XOKJYDXNCH1FE6DKT4K",
      website: "1Q4R5XYXRQSU5IQ6URX9JHVC2FA",
    },
    {
      name: "Timmothy Wolff",
      role: "Global Branding Associate",
      community: "Mann - Kiehn",
      description: "Mr. Buford Kuphal",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/geshan/128.jpg",
      twitter: "13E59CMB5F2LNR8ZZL1XENIFR6ZD1Q25B",
      linkedin: "3Y88SV51ZOAVHW6L9FJ7G5DVNZ6NKTWL",
      website: "3QEDYBYOMLZJFE0UQVXTT1WNWSWVC",
    },
    {
      name: "Malvina Spencer",
      role: "Global Program Producer",
      community: "Gerhold - Reynolds",
      description: "Makenna Gusikowski",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg",
      twitter: "3G1FIENLF6PXCL478KRBM64K3062",
      linkedin: "1AVH1A4AISLKNDBNL682W2AAXP2IF4",
      website: "1IPWGP3F6VTUONZ7UTP0WHFM2P7I9",
    },
  ]);

  useEffect(() => {
    set_teams(
      teams.map((team) => ({
        ...team,
        image: "https://iwdindia.in/img/ananya.e34b15dd.jpg",
      }))
    );
  }, []);

  return (
    <BaseLayout>
      <section className="pt-20">
        <h4 className="text-3xl">
          Our goal as a team is to empower women to thrive in tech and nurture
          communities.
        </h4>

        <p>
          We know that when women support each other, incredible things happen.
          We volunteer to encourage, elevate and support women and
          under-represented groups in the tech industry.
        </p>
      </section>

      <section className="h-fit w-full">
        <div className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
          {teams.map((team, index) => (
            <ProfileCard personData={team} key={index} />
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}

export default Teams;
