import { Alert } from "@react95/core";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { CollectionList } from "./collectionList";
import { useEffect, useState } from "react";

export const Collection = ({ handleGacha, close }) => {
  const [boxPokemons] = useLocalStorage("box", {});
  const [showPokemons, setShowPokemons] = useState([]);

  const goToGacha = () => {
    close();
    handleGacha(true);
  };

  const tempObj = Object.keys(boxPokemons)
    .map((key) => {
      return boxPokemons[key];
    })
    .sort((a, b) => {
      console.log(a, b, "a b");
      return a.id - b.id ? 1 : -1;
    });

  useEffect(() => {
    setShowPokemons(tempObj);
  }, []);

  return (
    <>
      {Object.keys(boxPokemons).length === 0 ? (
        <>
          <Alert
            title="Error"
            type="error"
            message="まだ捕まえたポケモンが　いないようだ"
            closeAlert={close}
            buttons={[{ value: "冒険にでかける", onClick: goToGacha }]}
          />
        </>
      ) : (
        <>
          <CollectionList box={showPokemons} close={close} />
        </>
      )}
    </>
  );
};
