import { useContext } from "react";
import { GachaStart } from "../components/gacha";
import { AllPokemon } from "./root";
import { rareConfig } from "../hooks/use-gacha";

export const Get = () => {
  const { data, normalPokemon } = useContext(AllPokemon);
  console.log("normalPokemon", normalPokemon);
  return (
    <div>
      <div>This is Get Page!!</div>
      <GachaStart />
    </div>
  );
};
