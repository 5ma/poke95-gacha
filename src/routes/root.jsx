import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { MenuBar } from "../components/menuBar/menuBar";
import { Hourglass, styleReset } from "react95";
import { Outlet } from "react-router-dom";
import { useAllPokemon } from "../hooks/use-api";
import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { rareConfig } from "../hooks/use-gacha";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif', DotGothic16, sans-serif;
    letter-spacing: 0.06em;
  }
`;

export const AllPokemon = createContext();

export const Root = () => {
  // 全てのポケモンのデータを取得
  const { pokemon, isLoading, isError } = useAllPokemon();

  const newArr = pokemon?.results.map((item) => {
    // idをURLから抜き出す
    const id = item.url.split("/").slice(-2, -1)[0];
    item["id"] = id;
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
    <Container>
      <GlobalStyles />
      <AllPokemon.Provider value={value}>
        <ThemeProvider theme={original}>
          {isLoading && <ExtendHourglass />}
          {pokemon !== undefined && (
            <>
              <Outlet />
              <MenuBar />
            </>
          )}
          {isError && <div>failed to load</div>}
        </ThemeProvider>
      </AllPokemon.Provider>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100dvh;
  background-color: teal;
`;

const ExtendHourglass = styled(Hourglass)`
  position: fixed;
  inset: 0;
  margin: auto;
`;
