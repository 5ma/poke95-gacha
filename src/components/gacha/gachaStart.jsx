import { Button, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";
import { useGacha } from "../../hooks/use-gacha";
import { mq } from "../../styles/theme";

export const GachaStart = () => {
  const [result, pull] = useGacha();
  console.log("result", result);

  return (
    <ExtendWindow>
      <WindowHeader>ポケモンガチャ</WindowHeader>
      <WindowContent>
        <Message>まだ見ぬポケモンがあなたとの出会いを待っています。冒険にでかけますか？</Message>
        {result.length > 0 && (
          <div>
            <p>結果</p>
            <ul>
              {result.map((r, i) => (
                <li key={i}>{r.id}</li>
              ))}
            </ul>
          </div>
        )}
        <ButtonWrapper>
          <Button primary onClick={() => pull(1)}>
            1匹GETする
          </Button>
          <Button primary onClick={() => pull(10)}>
            たくさんGETする
          </Button>
        </ButtonWrapper>
      </WindowContent>
    </ExtendWindow>
  );
};

const ExtendWindow = styled(Window)`
  position: fixed;
  inset: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  width: fit-content;
  max-width: 65%;
  height: fit-content;
  max-height: 80%;
  z-index: 100;

  ${mq.sp} {
    max-width: 90%;
  }
`;

const Message = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px 5px;
`;
