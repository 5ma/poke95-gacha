import { useEffect, useState } from "react";
import styled from "styled-components";

const zeroPadding = (number) => {
  return number.toString().padStart(2, 0);
};

export const Clock = () => {
  const [time, setTime] = useState("00:00");

  const updateClock = () => {
    const now = new Date();
    setTime(`${zeroPadding(now.getHours())}:${zeroPadding(now.getMinutes())}`);
  };

  useEffect(() => {
    const timerId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <Container>{time}</Container>;
};

const Container = styled.div`
  padding: 2px 6px;
  box-shadow: inset 0px 0px 0px 0px, inset 1px 1px 0px 0px #868a8e, 0.5px 0.5px 0px 0.5px #ffffff;
`;
