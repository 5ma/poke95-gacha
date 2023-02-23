import styled, { css } from "styled-components";
import { mq } from "./theme";

export const spInner = styled.css = () => {
  return css`
    ${mq.sp} {
      width: 90%;
      margin-right: auto;
      margin-left: auto;
    }
  `
}

export const pcInner = styled.css = () => {
  return css`
    ${mq.pc} {
      width: 90%;
      margin-right: auto;
      margin-left: auto;
    }
  `
}