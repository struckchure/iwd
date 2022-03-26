import React, { FunctionComponent } from "react";
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
  twitter?: string;
  linkedin?: string;
  website?: string;
  instagram?: string;
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
        <div className="flex flex-row items-center justify-center gap-2">
          {personData.twitter && (
            <a href={personData.twitter} target="_blank" rel="noreferrer">
              <i className="icon twitter"></i>
            </a>
          )}

          {personData.linkedin && (
            <a href={personData.linkedin} target="_blank" rel="noreferrer">
              <i className="icon linkedin"></i>
            </a>
          )}

          {personData.website && (
            <a href={personData.website} target="_blank" rel="noreferrer">
              <i className="icon link"></i>
            </a>
          )}

          {personData.instagram && (
            <a href={personData.instagram} target="_blank" rel="noreferrer">
              <i className="icon instagram"></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
