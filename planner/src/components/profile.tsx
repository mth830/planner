import React, { type ChangeEvent } from "react";
type ProfileProps = {
  profileImage: string;
  email: string;
  userAlias: string;
  changeProfileImage?: () => void;
  changeAlias?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Profile: React.FC<ProfileProps> = ({
  profileImage,
  email,
  userAlias,
  changeAlias,
  changeProfileImage,
}) => {
  return (
    <>
      <div>
        <img src={profileImage} alt="profile image" style={{width:200,height:200}}/>
        <div>
        <button onClick={changeProfileImage}>Change</button>
        </div>
      </div>
      <div>
        <span>E-mail</span>
        <span>{email}</span>
      </div>
      <div>
        <span>User Alias</span>
        <input value={userAlias} onChange={changeAlias}></input>
      </div>
    </>
  );
};
