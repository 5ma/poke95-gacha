import { Anchor, MenuList, MenuListItem, Separator } from "react95";
import gitHubImg from "../../assets/icon/github.png";
import infoImg from "../../assets/icon/Awfxex32Info_32x32_4.png";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <ExtendMenuList>
      <MenuListItem>
        <Anchor href="https://github.com/5ma/udemy-vuex/tree/main/src" target="_blank">
          <span>
            <img src={gitHubImg} alt="" />
          </span>
          GitHub
        </Anchor>
      </MenuListItem>
      <Separator />
      <MenuListItem>
        <span>
          <img src={infoImg} alt="" />
        </span>
        information
      </MenuListItem>
    </ExtendMenuList>
  );
};

const ExtendMenuList = styled(MenuList)`
  position: absolute;
  top: calc(100% - 3px);
  left: 3px;
`;
