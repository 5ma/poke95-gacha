import { AppBar, Button, Toolbar } from "react95";
import logoImg from "../../assets/windowslogo.png";
import soundOffImg from "../../assets/icon/Sndvol32303_32x32_4.png";
import soundOnImg from "../../assets/icon/Sndvol32304_32x32_4.png";
import { Clock } from "../clock";
import { useState } from "react";
import styled from "styled-components";
import { Navigation } from "../navigation";

export const MenuBar = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar>
      <ExtendToolbar>
        <Button onClick={() => setIsOpen(!isOpen)} active={isOpen}>
          <LogoImg src={logoImg} alt="windows95 logo" />
          Start
        </Button>
        {isOpen && <Navigation />}
        <Util>
          <Clock />
          <Button
            square
            aria-label={isSoundOn ? "BGMを再生停止する" : "BGMを再生する"}
            onClick={() => setIsSoundOn(!isSoundOn)}
          >
            <img src={isSoundOn ? soundOffImg : soundOnImg} alt="" />
          </Button>
        </Util>
      </ExtendToolbar>
    </AppBar>
  );
};

const ExtendToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const LogoImg = styled.img`
  margin-right: 10px;
`;

const Util = styled.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
`;
