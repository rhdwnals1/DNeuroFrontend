import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [login, setLogin] = useState(false);

  const isLogin = localStorage.getItem("token");
  const isKakaoLogin = localStorage.getItem("Kakao_token");

  useEffect(() => {
    if (isLogin || isKakaoLogin) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  const history = useHistory();

  const goToLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Kakao_token");
    history.push("/Main");
  };

  const goToSignIn = () => {
    history.push("/SignIn");
  };

  const goToSignUp = () => {
    history.push("/Certification");
  };

  const goToMyPage = () => {
    history.push("/MyPage");
  };

  const goToMain = () => {
    history.push("/Main");
  };

  return (
    <NavBar>
      <Img onClick={goToMain} src="/images/JM/dneuro.png" alt="logo" />
      <Container>
        {login ? (
          <Login onClick={goToLogout}>로그아웃</Login>
        ) : (
          <Login onClick={goToSignIn}>로그인</Login>
        )}
        <SignUp onClick={goToSignUp}>회원가입</SignUp>
        <Mypage onClick={goToMyPage}>결과 다시보기</Mypage>
      </Container>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  position: fixed;
  position: relative;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 100;
  background: #ffffff;
`;

const Img = styled.img`
  width: 145px;
  height: 50px;
  padding: 10px 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 50px;
  margin: 15px 0;
`;

const Login = styled.div`
  padding-top: 7px;
  color: #222;
  font-size: 17px;
  font-weight: 700;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s;
  }
`;

const SignUp = styled.div`
  padding-top: 7px;
  color: #222;
  font-size: 17px;
  font-weight: 700;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s;
  }
`;

const Mypage = styled.div`
  padding-top: 7px;
  color: #222;
  font-size: 17px;
  font-weight: 700;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s;
  }
`;

export default Nav;
