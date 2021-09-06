import React from "react";
import useBreakingBadQuery from "../../hooks/useBreakingBadQuery";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ query }) => {
  let { data, isLoading } = useBreakingBadQuery(query);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {data.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
