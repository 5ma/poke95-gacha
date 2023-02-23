import { useState } from "react";

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
    483, // ディアルガ
    484, // パルキア
    487, // ギラティナアナザーフォルム
    493, // アルセウス
    643, // レシラム
    644, // ゼクロム
  ],
};

const normalPokemons = [0, 1, 2, 3, 4, 5, 6];

export const useGacha = () => {
  const [result, setResult] = useState([]);

  const pull = (times) => {
    let tempResult = []; // 結果を入れる空配列を作成

    for (let i = 0; i < times; i++) {
      const isRare = Math.random() < rareConfig.probability;
      let resultObj = {
        isRare: false,
        id: 0,
      };

      if (isRare) {
        const rareIndex = Math.floor(Math.random() * rareConfig.pokemons.length);
        resultObj.isRare = true;
        resultObj.id = rareConfig.pokemons[rareIndex];
      } else {
        const normalIndex = Math.floor(Math.random() * normalPokemons.length);
        resultObj.id = normalPokemons[normalIndex];
      }

      tempResult.push(resultObj);
    }

    setResult(tempResult);
  };

  return [result, pull];
};
