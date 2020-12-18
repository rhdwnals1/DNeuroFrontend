import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const history = useHistory();
  const goToSurvey = () => {
    history.push("/Survey");
  };

  return (
    <WrapMain>
      <Title>
        내 성격에 딱!
        <br />
        어울리는 유형은?
      </Title>
      <SubTitle>테스트로 보는 내 성격, MBTI</SubTitle>
      <Test onClick={goToSurvey}>테스트 시작</Test>
      <Logo>
        <img src="/images/JM/dneuro.png" alt="dneuro" />
      </Logo>
    </WrapMain>
  );
};

export default Main;

const WrapMain = styled.section`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 17vh;
  margin-bottom: 45px;
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
  margin-bottom: 80px;
  padding: 0 10px;
`;

const Test = styled.button`
  width: 256px;
  height: 50px;
  border: solid 0.75px #becc01;
  border-radius: 32px;
  background-color: #becc01;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  outline-style: none;

  &:hover {
    background-color: #99a400;
    cursor: pointer;
  }
`;

const Logo = styled.footer`
  position: absolute;
  left: 110px;
  text-align: center;
  width: 170px;
  height: 50px;
  margin-top: 70px;
`;
