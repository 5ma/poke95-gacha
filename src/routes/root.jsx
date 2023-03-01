import styled from "styled-components";
import { Hourglass } from "react95";
import { Outlet } from "react-router-dom";
import { useAllPokemon } from "../hooks/use-api";
import { createContext, useState } from "react";
import { rareConfig } from "../hooks/use-gacha";
import { TaskBar, ThemeProvider, GlobalStyle, List, Modal } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import ballImg from "../assets/pokeball.png";

export const AllPokemon = createContext();

export const Root = () => {
  const [isShow, setIsShow] = useState(true);
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
    data: newArr,
    normalPokemon,
  };

  return (
    <AllPokemon.Provider value={value}>
      <ThemeProvider>
        <GlobalStyle />
        {isLoading && <ExtendHourglass />}
        {pokemon !== undefined && (
          <>
            <Outlet />
            {/* <MenuBar /> */}
          </>
        )}
        {isError && <div>failed to load</div>}
        {isShow && (
          <Modal title="welcome pokemon" hasWindowButton closeModal={() => setIsShow(false)}>
            dsadas
          </Modal>
        )}
        <TaskBar
          list={
            <List>
              <List.Item icon={<WindowsExplorer variant="32x32_4" />}>ずかんをみる</List.Item>
              <List.Item icon={<img src={ballImg} alt="" width={30} height={30} />}>ポケモンにであう</List.Item>
            </List>
          }
        />
      </ThemeProvider>
    </AllPokemon.Provider>
  );
};

const ExtendHourglass = styled(Hourglass)`
  position: fixed;
  inset: 0;
  margin: auto;
`;
