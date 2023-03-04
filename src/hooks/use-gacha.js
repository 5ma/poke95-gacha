import { useContext, useState } from "react";
import { StoreContext } from "../routes/root";
import { getRandomInt } from "../utils";

export const rareConfig = {
  probability: 0.01, // 1%の確率でレアポケモンが出る
  pokemons: [
    144, // フリーザー
    145, // サンダー
    146, // ファイヤー
    150, // ミュウツー
    151, // ミュウ
    243, // ライコウ
    244, // エンテイ
    245, // スイクン
    249, // ルギア
    250, // ホウオウ
    251, // セレビィ
    350, // ミロカロス
    380, // ラティアス
    381, // ラティオス
    382, // カイオーガ
    383, // グラードン
    385, // ジラーチ
    447, // ミニルカリオ
    448, // ルカリオ
    483, // ディアルガ
    484, // パルキア
    487, // ギラティナアナザーフォルム
    493, // アルセウス
    643, // レシラム
    644, // ゼクロム
  ],
};

export const useGacha = () => {
  const [result, setResult] = useState([]);
  const copyRarePokemons = [...rareConfig.pokemons];
  const { allPokemons, normalPokemon } = useContext(StoreContext);

  const pull = (times) => {
    let tempResult = []; // 結果を入れる空配列を作成

    for (let i = 0; i < times; i++) {
      let id;

      const isRare = Math.random() <= rareConfig.probability;

      if (isRare) {
        const rareIndex = Math.floor(getRandomInt(0, copyRarePokemons.length));
        // レアポケモンが複数体当たったとき、キャラが重複しないように配列要素から削除する
        id = copyRarePokemons.splice(rareIndex, 1)[0];
      } else {
        const normalIndex = Math.floor(getRandomInt(0, normalPokemon.length));
        id = normalPokemon[normalIndex].id;
      }

      tempResult.push(allPokemons.find((poke) => poke.id === id));
    }

    setResult(tempResult);
  };

  return [result, pull];
};
