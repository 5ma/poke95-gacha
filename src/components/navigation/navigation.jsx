import { Anchor, MenuList, MenuListItem, Separator } from "react95";
import gitHubImg from "../../assets/icon/github_icon.png";
import infoImg from "../../assets/icon/Awfxex32Info_32x32_4.png";
import pcImg from "../../assets/icon/Msnp32ServerIcon_32x32_4.png";
import ballImg from "../../assets/pokeball.png";
import styled from "styled-components";
import { color, mq } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <>
      <ExtendMenuList>
        <FlexMenuListItem>
          <Link to="collection" onClick={props.close}>
            <MenuIcon>
              <img src={pcImg} alt="" />
            </MenuIcon>
            ずかんをみる
          </Link>
        </FlexMenuListItem>
        <FlexMenuListItem>
          <Link to="get" onClick={props.close}>
            <MenuIcon>
              <img src={ballImg} alt="" />
            </MenuIcon>
            ポケモンにであう
          </Link>
        </FlexMenuListItem>
        <FlexMenuListItem>
          <MenuIcon>
            <img src={infoImg} alt="" />
          </MenuIcon>
          About
        </FlexMenuListItem>
        <Separator />
        <MenuListItem>
          <ExtendAnchor href="https://github.com/5ma/poke95-gacha" target="_blank">
            <MenuIcon>
              <img src={gitHubImg} alt="" />
            </MenuIcon>
            GitHub
          </ExtendAnchor>
        </MenuListItem>
      </ExtendMenuList>

      {}
    </>
  );
};

const ExtendMenuList = styled(MenuList)`
  position: absolute;
  bottom: 100%;
  left: -1px;
`;

const FlexMenuListItem = styled(MenuListItem)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 8px;
  text-align: left;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 8px;
    width: 100%;
  }
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
