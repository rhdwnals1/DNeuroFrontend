import { css } from "styled-components";

export const commonContainer = css``;

export const clearFix = css`
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const theme = {
  skyblue: "rgba(50, 175, 254)",
  ligthblue: "rgba(141, 212, 250, 0.3)",
  pink: "rgba(251, 21, 84)",
  navy: "rgba(2, 17, 29)",
  green: "rgba(44, 188, 170)",
};

export const boxShadow = css`
  box-shadow: 12px 8px 24px rgba(0, 0, 0, 0.2), 4px 8px 8px rgba(0, 0, 0, 0.1),
    0 0 2px rgba(0, 0, 0, 0.24);
`;



export default theme;
