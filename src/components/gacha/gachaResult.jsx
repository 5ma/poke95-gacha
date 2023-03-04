import styled, { css } from "styled-components";
import { useState, useEffect, useContext } from "react";
import anime from "animejs";
import { Modal, ProgressBar, Button } from "@react95/core";
import { useGacha } from "../../hooks/use-gacha";
import { StoreContext } from "../../routes/root";
import { useLocalStorage } from "../../hooks/use-local-storage";
import ballImg from "../../assets/pokeball.png";
import normalBallImg from "../../assets/ball.png";
import premierBallImg from "../../assets/premirball.png";

export const GachaResult = ({ times, close }) => {
  const [percent, setPercent] = useState(0);
  const [isLoadingEnd, setIsLoadingEnd] = useState(false);
  const [isResultShow, setIsResultShow] = useState(false);
  const [result, pull] = useGacha();
  const [boxPokemons, setBoxPokemons] = useLocalStorage("box", {});
  const { allPokemons, spriteEndPoint } = useContext(StoreContext);

  const percentObj = {
    value: 0,
  };

  useEffect(() => {
    if (!result.length) return;

    // 手持ちポケモンのオブジェクトをコピー
    const copyObj = structuredClone(boxPokemons);
    result.forEach((r) => {
      if (r.id in copyObj) {
        // すでに持っている場合はamountの数を増やす
        copyObj[r.id].amount++;
      } else {
        const obj = allPokemons.find((poke) => poke.id === r.id);
        obj["amount"] = 1;
        copyObj[r.id] = obj;
      }
    });
    // localStorageに手持ちのポケモンを保存
    setBoxPokemons(copyObj);
  }, [result]);

  useEffect(() => {
    const duration = times === 1 ? 1 : Math.random() * (4 - 2) + 2;

    const loadingCount = anime({
      targets: percentObj,
      value: 100,
      round: 1,
      duration: duration * 1000,
      easing: "easeInOutQuint",
      update() {
        setPercent(percentObj.value);
      },
      complete() {
        pull(times);
        setIsLoadingEnd(true);
      },
    });

    return () => {
      loadingCount?.pause();
    };
  }, []);

  return (
    <Modal
      title={isLoadingEnd ? "ガチャ結果" : "Loading..."}
      icon={<img src={ballImg} alt="" width={15} height={15} />}
      closeModal={() => close(false)}
      width={Math.floor(window.innerWidth * 0.8) > 500 ? 500 : Math.floor(window.innerWidth * 0.8)}
      defaultPosition={{
        x: 20,
        y: Math.floor(window.innerHeight / 2) - 150,
      }}
    >
      {!isLoadingEnd ? (
        <ExtendProgressBar width={200} percent={percent} />
      ) : (
        <ResultMessage>
          <div>
            やったー！
            <br />
            ポケモンを{times}匹　捕まえた！
          </div>
          <Result>
            {result.map((r, i) => (
              <ResultItem key={i}>
                <Ball isShow={isResultShow}>
                  <img src={r.isRare ? premierBallImg : normalBallImg} alt="" />
                </Ball>
                <Pokemon isShow={isResultShow}>
                  <img src={`${spriteEndPoint + r.id}.png`} alt="" />
                </Pokemon>
              </ResultItem>
            ))}
          </Result>
          {!isResultShow ? (
            <ExtendConfirmButton onClick={() => setIsResultShow(true)}>つぎへ</ExtendConfirmButton>
          ) : (
            <ExtendConfirmButton onClick={() => close(false)}>もどる</ExtendConfirmButton>
          )}
        </ResultMessage>
      )}
    </Modal>
  );
};

const Result = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const ResultItem = styled.li`
  position: relative;
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  list-style: none;
`;

const ExtendProgressBar = styled(ProgressBar)`
  margin: 0 auto 10px;
`;

const ResultMessage = styled.div`
  text-align: center;
`;

const ExtendConfirmButton = styled(Button)`
  display: block;
  width: fit-content;
  margin: 15px 0 0 auto;
`;

const Ball = styled.div`
  width: 55%;
  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 0;
    `}
`;

const Pokemon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}
  img {
    width: 100%;
  }
`;
