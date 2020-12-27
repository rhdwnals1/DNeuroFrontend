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

export const imgUrl = {
  logo:
    "https://lh3.googleusercontent.com/-sfYTUM5rL-9wWBbnWrQ-fKLNS01kKHJ0FiT1v3fbcnsaquk0_DP9kMQosYbGgIyD2jHXQO5EqMbYba4MFftVwEORWP7-0AESDUWDlQ4fxhTIupoxr8OTi_2wVHEnX0mpf1jC-P2gbFcwpj6QzybsGcfOkg09g2Mvh84AAw2N38rL_3fg0d_49nz2ksYNWAY1eGahZIbSZdNwJYd5oRY5AUElSs2rhA9qxHFVMOr845-F7XpqKtkaFDU-icYbi-kL1gqggr4ZQbKnLu6gvXWzqaeCmJ2RM9aSQmwjIgPtJSEsjdvzYsVHL8y5j6kzYGF3z0na7M_RLJpWM8MjCA9-_Zep-48uS4LTC5zet1N7Q3opEYPNyMz2womV7pfxAOsf0W4CfKwBX7Bj8L86Co4e81GJW73LkDqmbFVHs-Ak3cJLFoCmmwqcoA5TuX-FVHy4dbyDjPZ1fd5II6CUS1VSEw8GVdvdSPIsWMSrLOLXtQK4OW0zAkXrZOr2K1CJXwESM2NCWOc_EkKPld1GH0WIY_Va55EjxqT8teAEL7RAfc87maRElXbfoTkHhKViFqbTeMum8FIDu6AdwfRzaSBJGLkOidRsN1kts5k7dGWApAvQm1T9jQ1aIQWA8BnhDogKswlF6hx6mIlSzYQlOd1t-MZit65M3ibbuukVGwg1aNo8-3yI_AkLZD06pA5MQ=w869-h980-no?authuser=0",
};

export const boxShadow = css`
  box-shadow: 12px 8px 24px rgba(0, 0, 0, 0.2), 4px 8px 8px rgba(0, 0, 0, 0.1),
    0 0 2px rgba(0, 0, 0, 0.24);
`;

export default theme;
