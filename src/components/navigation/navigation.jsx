import { Anchor, MenuList, MenuListItem, Separator } from "react95";
import gitHubImg from "../../assets/icon/github_icon.png";
import infoImg from "../../assets/icon/Awfxex32Info_32x32_4.png";
import styled from "styled-components";
import { color, mq } from "../../styles/theme";

export const Navigation = () => {
  return (
    <ExtendMenuList>
      <MenuListItem>
        <ExtendAnchor href="https://github.com/5ma/poke95-gacha" target="_blank">
          <MenuIcon>
            <img src={gitHubImg} alt="" />
          </MenuIcon>
          GitHub
        </ExtendAnchor>
      </MenuListItem>
      <Separator />
      <FlexMenuListItem>
        <MenuIcon>
          <img src={infoImg} alt="" />
        </MenuIcon>
        information
      </FlexMenuListItem>
    </ExtendMenuList>
  );
};

const ExtendMenuList = styled(MenuList)`
  position: absolute;
  bottom: 100%;
  left: -1px;
`;

const FlexMenuListItem = styled(MenuListItem)`
  display: flex;
  align-items: center;
  gap: 0 4px;
`;

const ExtendAnchor = styled(Anchor)`
  display: flex;
  align-items: center;
  gap: 0 4px;
  width: 100%;

  ${mq.hover} {
    &:hover {
      color: ${color.white};
    }
  }
`;

const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;
