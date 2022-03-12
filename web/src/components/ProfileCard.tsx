import React, { FunctionComponent } from "react";

import { TwitterIcon, LinkedInIcon, LinkIcon } from "./svgs";
import "../assets/scss/profile-card.scss";

interface ProfileCardProps {
  personData: Person;
}

export interface Person {
  name: string;
  role: string;
  community: string;
  description: string;
  image: string;
  twitter: string;
  linkedin: string;
  website: string;
}

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  personData,
}) => {
  return (
    <>
      <div className="card">
        <img
          src={personData.image}
          alt={personData.name}
          className="h-auto w-20 rounded-full object-cover"
        />
        <p style={{ fontSize: "105%" }}>{personData.name}</p>
        <p style={{ fontSize: "80%" }}>{personData.community}</p>
        <div className="flex flex-row items-center">
          <a href={personData.twitter} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href={personData.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href={personData.website} target="_blank" rel="noreferrer">
            <LinkIcon />
          </a>
        </div>
      </div>
    </>
  );
};
