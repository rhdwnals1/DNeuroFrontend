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
    history.push("/Certification");
  };

  return (
    <NavBar>
      <Img src="/images/JM/dneuro.png" alt="logo" />
      <Container>
        {login ? (
          <Login onClick={goToLogout}>로그아웃</Login>
        ) : (
          <Login onClick={goToSignIn}>로그인</Login>
        )}
        <SignUp onClick={goToSignUp}>회원가입</SignUp>
        <Mypage onClick={goToMyPage}>마이페이지</Mypage>
      </Container>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  z-index: 100;
  background: #ffffff;
  position: fixed;
  position: relative;
`;

const Img = styled.img`
  width: 145px;
  height: 50px;
  padding: 10px 10px;
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
  }
`;

export default Nav;
