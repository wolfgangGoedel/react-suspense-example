import React from "react";
import useFetch from "../utils/useFetch";
import Img from "./Img";

type GHProfile = { avatar_url: string; login: string };

const Profile: React.FC<{ user: string }> = ({ user }) => {
  const data = useFetch<GHProfile>(`https://api.github.com/users/${user}`);
  return (
    <div>
      <React.Suspense fallback="avatar loading...">
        <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      </React.Suspense>
      <div>Username: {data.login}</div>
    </div>
  );
};

export default Profile;
