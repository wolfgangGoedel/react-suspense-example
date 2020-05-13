import React from "react";
import useFetch from "../utils/useFetch";

type GHRepository = { name: string };

const Repositories: React.FC<{ username: string }> = (props) => {
  const data = useFetch<GHRepository[]>(
    `https://api.github.com/users/${props.username}/repos`
  );
  return (
    <ul>
      {data.map((repository: any) => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
  );
};

export default Repositories;
