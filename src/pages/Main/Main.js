import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { boxShadow } from "../../styles/CommonStyle";
import { theme, imgUrl } from "../../styles/CommonStyle";
import Footer from "../Main/Component/Footer";
import Nav from "../Main/Component/Nav";
import styled from "styled-components";

const Main = () => {
  // const [login, setLogin] = useState(false);
  const [token, setToken] = useState(true);

  // const isLogin = localStorage.getItem("token");
  // const isKakaoLogin = localStorage.getItem("Kakao_token");
  const isToken = localStorage.getItem("token");
  const isKakaoToken = localStorage.getItem("Kakao_token");

  // useEffect(() => {
  //   if (isLogin || isKakaoLogin) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // });
  useEffect(() => {
    if (isToken || isKakaoToken) {
      setToken(true);
    } else {
      setToken(false);
    }
  });

  const history = useHistory();
  const goToSurvey = () => {
    history.push("/Survey");
  };
  // const goToSignIn = () => {
  //   history.push("/SignIn");
  // };
  // const goToSignUp = () => {
  //   history.push("/Certification");
  // };

  // const goToLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("Kakao_token");
  //   history.push("/Main");
  // };

  const doNotEnter = () => {
    alert("로그인이 필요합니다.");
  };

  return (
    <>
      <Nav />
      <WrapMain>
        <Logo>
          <img src={imgUrl.logo} alt="dneuro" />
        </Logo>
        <Title>
          내 성격에 딱!
          <br />
          어울리는 유형은?
        </Title>
        <SubTitle>테스트로 보는 내 성격, MBTI</SubTitle>
        {token ? (
          <Test onClick={goToSurvey}>테스트 시작</Test>
        ) : (
          <Test onClick={doNotEnter}> 테스트 시작</Test>
        )}
        {/* <Container>
          {login ? (
            <Login onClick={goToLogout}>로그아웃</Login>
          ) : (
            <Login onClick={goToSignIn}>로그인</Login>
          )}
          <SignUp onClick={goToSignUp}>회원가입</SignUp>
        </Container> */}
      </WrapMain>
      <Footer />
    </>
  );
};

export default Main;

const WrapMain = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.footer`
  width: 110px;
  height: 120px;
  margin: 130px auto 0;
`;

const Title = styled.div`
  margin: 40px auto 45px;
  padding: 0 10px;
  font-size: 32px;
  font-weight: 800;
  color: #222;
  line-height: 1.6;
  letter-spacing: -1px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 30px;
  padding: 0 10px;
`;

const Test = styled.button`
  width: 256px;
  height: 50px;
  margin: 20px auto;
  border: solid 0.75px #ee762c;
  border-radius: 32px;
  background-color: ${theme.pink};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  outline-style: none;

  &:hover {
    ${boxShadow};
    background-color: ${theme.pink};
    cursor: pointer;
  }
`;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 50px 0;
// `;

// const Login = styled.div`
//   padding-top: 7px;
//   color: #222;
//   font-size: 17px;
//   font-weight: 700;
//   margin: 0 10px;

//   &:hover {
//     cursor: pointer;
//     width: 80px;
//     height: 30px;
//     border: 1px solid pink;
//     border-radius: 15px;
//     color: #fff;
//     background-color: ${theme.pink};
//   }
// `;

// const SignUp = styled.div`
//   padding-top: 7px;
//   color: #222;
//   font-size: 17px;
//   font-weight: 700;
//   margin: 0 10px;

//   &:hover {
//     cursor: pointer;
//     width: 80px;
//     height: 30px;
//     border: 1px solid pink;
//     border-radius: 15px;
//     color: #fff;
//     background-color: ${theme.pink};
//   }
// `;
