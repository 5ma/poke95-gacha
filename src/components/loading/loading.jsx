import { useState } from "react";
import { Button, ProgressBar, Window, WindowHeader } from "react95";
import styled from "styled-components";

export const Loading = (props) => {
  const [percent, setPercent] = useState(40);

  return (
    <ExtendWindow>
      <ExtendWindowHeader>
        <span>Loading...</span>
        <Button>
          <CloseIcon />
        </Button>
      </ExtendWindowHeader>
      <WindowContent>
        <ProgressBar variant="tile" value={Math.floor(percent)} />
      </WindowContent>
    </ExtendWindow>
  );
};

const ExtendWindow = styled(Window)`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  height: 300px;
  z-index: 100;
`;

const ExtendWindowHeader = styled(WindowHeader)`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;
  &:before,
  &::after {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.materialText};
  }
  &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:after {
    height: 3px;
    width: 100%;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const WindowContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
`;
