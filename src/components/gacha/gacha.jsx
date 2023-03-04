import { GachaStart } from ".";
import { GachaResult } from "./gachaResult";
import { useState, useEffect } from "react";

export const Gacha = ({ close }) => {
  const [times, setTimes] = useState(0);
  const [isResultShow, setIsResultShow] = useState(false);

  return (
    <>
      <GachaStart close={close} setPullTimes={setTimes} showResult={setIsResultShow} isResultShow={isResultShow} />
      {isResultShow && <GachaResult times={times} close={setIsResultShow} />}
    </>
  );
};
