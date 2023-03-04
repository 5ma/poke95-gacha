import styled from "styled-components";
import { Button, Modal } from "@react95/core";
import ballImg from "../../assets/pokeball.png";

export const GachaStart = ({ close, setPullTimes, showResult, isResultShow }) => {
  const pullGacha = (times) => {
    setPullTimes(times);
    showResult(true);
  };
  return (
    <>
      <ExtendModal
        title="ポケモンガチャ"
        closeModal={close}
        icon={<img src={ballImg} alt="" width={15} height={15} />}
        width={Math.floor(window.innerWidth * 0.8) > 500 ? 500 : Math.floor(window.innerWidth * 0.8)}
        defaultPosition={{
          x: 20,
          y: Math.floor(window.innerHeight / 2) - 150,
        }}
      >
        <Message>
          まだ見ぬポケモンが　あなたとの出会いを待っています。
          <br />
          冒険に　でかけますか？
        </Message>
        <ButtonWrapper>
          {!isResultShow && (
            <>
              <Button onClick={() => pullGacha(1)}>1匹GETする</Button>
              <Button onClick={() => pullGacha(10)}>たくさんGETする</Button>
            </>
          )}
        </ButtonWrapper>
      </ExtendModal>
    </>
  );
};

const Message = styled.div`
  margin-bottom: 10px;
`;

const ExtendModal = styled(Modal)`
  max-height: 80vh;
  overflow-y: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 6px;
`;

const Loading = styled.div`
  text-align: center;
`;
