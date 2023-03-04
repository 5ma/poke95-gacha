import styled, { css } from "styled-components";
import { Modal } from "@react95/core";
import { useContext } from "react";
import { StoreContext } from "../../routes/root";
import { WindowsExplorer } from "@react95/icons";
import { useLocalStorage } from "../../hooks/use-local-storage";

export const CollectionList = ({ box, close }) => {
  const [boxPokemons] = useLocalStorage("box", {});
  const { allPokemons, spriteEndPoint } = useContext(StoreContext);
  // 捕まえていないポケモンの配列を作成
  const notFoundPokemons = allPokemons.filter((poke) => {
    return !(poke.id in boxPokemons);
  });
  return (
    <ExtendModal
      title="ポケモンずかん"
      icon={<WindowsExplorer variant="32x32_4" />}
      closeModal={close}
      defaultPosition={{
        x: Math.floor(window.innerWidth * 0.05),
        y: 20,
      }}
    >
      つかまえた　ポケモン　{box.length}！<br />
      つかまえていない　ポケモン　{allPokemons.length - box.length}！
      <Pokedex>
        {box.map((pokemon) => (
          <PokedexItem key={pokemon.id}>
            <PokedexButton type="button">
              <img
                src={`${spriteEndPoint + pokemon.id}.png`}
                alt={pokemon.name}
                loading="lazy"
                width={96}
                height={96}
              />
              <div>{pokemon.name}</div>
            </PokedexButton>
          </PokedexItem>
        ))}
        {notFoundPokemons.map((pokemon) => (
          <PokedexItem key={pokemon.id}>
            <PokedexButton type="button" disabled grayOut>
              <img
                src={`${spriteEndPoint + pokemon.id}.png`}
                alt={pokemon.name}
                loading="lazy"
                width={96}
                height={96}
              />
            </PokedexButton>
          </PokedexItem>
        ))}
      </Pokedex>
    </ExtendModal>
  );
};

const ExtendModal = styled(Modal)`
  width: 90%;
  height: calc((100svh - 28px) * 0.9);
  overflow-y: auto;
`;

const Pokedex = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
  padding: 0;
`;

const PokedexItem = styled.li`
  list-style: none;
`;

const PokedexButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;

  ${({ grayOut }) =>
    grayOut &&
    css`
      img {
        filter: brightness(0%) opacity(40%);
      }
    `}
`;
