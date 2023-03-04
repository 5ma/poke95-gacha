import styled from "styled-components";
import { Hourglass } from "react95";
import { useAllPokemon } from "../hooks/use-api";
import { createContext, useState } from "react";
import { rareConfig } from "../hooks/use-gacha";
import { TaskBar, ThemeProvider, GlobalStyle, List } from "@react95/core";
import { WindowsExplorer, Issue } from "@react95/icons";
import ballImg from "../assets/pokeball.png";
import { Gacha } from "../components/gacha";

export const StoreContext = createContext();

export const Root = () => {
  const [isGachaShow, setIsGachaShow] = useState(false);

  const closeGacha = () => setIsGachaShow(false);

  // 全てのポケモンのデータを取得
  const { pokemon, isLoading, isError } = useAllPokemon();

  const newArr = pokemon?.results.map((item) => {
    // idをURLから抜き出す
    const id = item.url.split("/").slice(-2, -1)[0];
    item["id"] = id;
    // isRareフラグ追加
    item["isRare"] = rareConfig.pokemons.includes(Number(id));

    return item;
  });

  // レアキャラを除いた配列を作成
  const normalPokemon = pokemon?.results.filter((item) => {
    return !rareConfig.pokemons.includes(Number(item.id));
  });

  const value = {
    allPokemons: newArr,
    normalPokemon,
    spriteEndPoint: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  };

  return (
    <StoreContext.Provider value={value}>
      <ThemeProvider>
        <GlobalStyle />
        {isLoading && <ExtendHourglass />}
        {pokemon !== undefined && (
          <>
            {isGachaShow && <Gacha close={closeGacha} />}
            <TaskBar
              list={
                <List>
                  <List.Item icon={<WindowsExplorer variant="32x32_4" />}>ずかんをみる</List.Item>
                  <List.Item
                    icon={<img src={ballImg} alt="" width={30} height={30} />}
                    onClick={() => setIsGachaShow(true)}
                  >
                    ポケモンにであう
                  </List.Item>
                  <List.Item icon={<Issue variant="32x32_4" />}>あそびかた</List.Item>
                </List>
              }
            />
          </>
        )}
        {isError && <div>failed to load</div>}
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

const ExtendHourglass = styled(Hourglass)`
  position: fixed;
  inset: 0;
  margin: auto;
`;
