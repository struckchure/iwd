import React, { useEffect, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";
import BaseLayout from "../layouts/BaseLayout";
import { get_image_url } from "../utils";

function Teams() {
  const [teams, set_teams] = useState([
    {
      name: "Hassana Abdullahi",
      role: "",
      community: "",
      description: "",
      image: get_image_url("hassana-abdullahi.png"),
      twitter: "https://twitter.com/hassanaabdll1",
    },
    {
      name: "Amina Ahuraka",
      role: "",
      community: "",
      description: "",
      image: get_image_url("amina-ahuraka.jpeg"),
      instagram: "https://instagram.com/_sunofahuraka",
    },
    {
      name: "Amina Lawal",
      role: "",
      community: "",
      description: "",
      image: get_image_url("amina-lawal.jpeg"),
      twitter: "https://twitter.com/amiynarh",
      instagram: "https://instagram.com/miy_narh",
      linkedin: "https://www.linkedin.com/in/amina-lawal-93284718b",
    },
    {
      name: "Rasheedat Atinuke Jamiu",
      role: "",
      community: "",
      description: "",
      image: get_image_url("atinuke-rasheedat.jpeg"),
      twitter: "https://twitter.com/Rassh_raj",
      instagram: "https://instagram.com/Rassh_raj",
      linkedin: "https://www.linkedin.com/in/rasheedat-atinuke-jamiu-ba64291b4",
    },
  ]);

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
