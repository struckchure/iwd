import React, { FunctionComponent } from "react";

import { TwitterIcon, LinkedInIcon, LinkIcon } from "./svgs";
import ImageCropper from "./ImageCropper";
import Modal from "./modal";
import "../assets/css/profile-card.scss";

interface ProfileCardProps {
  personData: Person;
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
}

export interface Person {
  name: string;
  role: string;
  community: string;
  description: string;
  image: string;
  twitter: string;
  LinkedIn: string;
  website: string;
}

// const person1: Person = {
//   name: "Aananya T",
//   role: "WTM Ambassador & GDG Co-organizer, GDG Bangalore ",
//   community: "GDG Bangalore",
//   description:
//     "Aananya is a Developer Experience Engineer at Kubric. She is a strong believer of the principle “Lift as you climb”. Loves Idlis and is driven by empathy. Talk to her about Code, Community & Creativity",
//   image: "ananya.e34b15dd.jpg",
//   twitter: "https://twitter.com/py_anan",
//   LinkedIn: "https://www.linkedin.com/in/aananya-27/",
//   website: "https://vrijraj.xyz/",
// };
// const [openModal, setOpenModal] = useState(false);
// const [modalChild, setModalChild] = useState(<></>);
// {
//   /* <ProfileCard
//       personData={person1}
//       openModal={openModal}
//       setOpenModal={setOpenModal}
//     /> */
// }

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  personData,
  openModal,
  setOpenModal,
}) => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <ImageCropper imageURL={personData.image} alt={`${personData.name}`} />
        <p style={{ fontSize: "105%" }}>{personData.name}</p>
        <p style={{ fontSize: "80%" }}>{personData.community}</p>
        <div className="flex flex-row items-center">
          <a href={personData.twitter} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href={personData.LinkedIn} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href={personData.website} target="_blank" rel="noreferrer">
            <LinkIcon />
          </a>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <ProfileModal
          personData={personData}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Modal>
    </>
  );
};

const ProfileModal: FunctionComponent<ProfileCardProps> = ({
  personData,
  openModal,
  setOpenModal,
}) => {
  return (
    <div
      className="modal-card"
      onClick={(ev) => {
        ev.stopPropagation();
      }}
    >
      <div>
        <div className="col-md-4 col-12 flex flex-col items-center text-center">
          <ImageCropper
            imageURL={personData.image}
            alt={`${personData.name}`}
          />
          <p style={{ fontSize: "140%" }} className="mt-3">
            {personData.name}
          </p>
          <p style={{ fontSize: "100%", width: "229px" }} className="mt-1 mb-4">
            {personData.role}
          </p>
          <div className="flex flex-row items-center">
            <a href={personData.twitter} target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a href={personData.LinkedIn} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href={personData.website} target="_blank" rel="noreferrer">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div>
          <p>{personData.description}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
