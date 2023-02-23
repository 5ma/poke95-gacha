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
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <ExtendAppBar>
      <ExtendToolbar>
        <Button onClick={() => setIsOpen(!isOpen)} active={isOpen}>
          <LogoImg src={logoImg} alt="windows95 logo" />
          Start
        </Button>
        {isOpen && <Navigation close={closeNav} />}
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
    </ExtendAppBar>
  );
};

const ExtendAppBar = styled(AppBar)`
  position: fixed;
  top: auto;
  right: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

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
