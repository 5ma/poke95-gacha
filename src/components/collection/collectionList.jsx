import { Link } from "react-router-dom";
import styled from "styled-components";

export const CollectionList = (props) => {
  console.log("props", props);
  if (props.lists.length) {
    return (
      <ul>
        {props.lists.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      まだ捕まえたポケモンがいません。<Link to="../get">ここ</Link>からポケモンをGETしよう！
    </div>
  );
};
