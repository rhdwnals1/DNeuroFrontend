<<<<<<< HEAD
import React, { useState, Fragment, useEffect } from "react";
=======
import React, { Fragment, useEffect, useState } from "react";
>>>>>>> 2d7e796 (wip)
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RESULT_DATA } from "../../config";
import { boxShadow, justifyCenter } from "../../styles/CommonStyle";

const Result = () => {
  const history = useHistory();
  const goToMain = () => {
    history.push("/Main");
  };

  const [content, setContent] = useState();
  const [percent, setPercent] = useState();

  useEffect(() => {
    fetch(`${RESULT_DATA}`)
      .then((res) => res.json())
      .then((res) => {
        setContent(res.data.content);
        setPercent(res.data.percent);
      });
  }, []);

  const myType = content && content.slice(0, content.indexOf("\r"));
  const firstContent = content && content.slice(content.indexOf("\r"), content.lastIndexOf("\r"));
  const secondContent = content && content.slice(content.lastIndexOf("\r"));

  return (
    <Fragment>
      <WrapResult>
        <Logo>
          <img src="/images/JM/dneuro.png" alt="Logo" />
        </Logo>
        <Explain>
          <div>나의 유형은</div>
          <div>{myType}</div>
        </Explain>
        <Img>
          <img src="/images/JM/3.png" alt="" />
        </Img>
        <Content>
          <div>{firstContent}</div>
          <div>{secondContent}</div>
        </Content>
        <Container>
          <div>MBTI를 한 사람 중 나와 같은 유형은?</div>
          <div>{percent}%</div>
        </Container>
        <Button onClick={goToMain}>테스트 다시하기</Button>
      </WrapResult>
    </Fragment>
  );
};

export default Result;

const WrapResult = styled.section`
  ${justifyCenter}
  flex-direction: column;
  width: 600px;
  margin: 50px auto;
`;

const Logo = styled.div`
  ${justifyCenter}

  img {
    width: 130px;
    height: 40px;
  }
`;

const Explain = styled.div`
  div {
    ${justifyCenter}
    &:first-child {
      margin-top: 35px;
      font-size: 18px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.3);
    }
    &:last-child {
      margin-top: 10px;
      font-size: 25px;
      font-weight: 800;
      color: #222;
    }
  }
`;

const Img = styled.div`
  ${justifyCenter}

  img {
    width: 300px;
    height: 300px;
  }
`;

const Content = styled.div`
  text-align: left;
  margin: 5px 95px 0;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: -0.8px;

  div {
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  width: 410px;
  height: 180px;
  margin: 0 auto;

  div {
    &:first-child {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #222;
      margin-bottom: 24px;
    }

    &:last-child {
      font-size: 45px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #becc01;
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 71px;
  margin: 20px auto 30px;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  background-color: #f2f2f2;
  color: #222;
  border: 1px solid #f2f2f2;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    ${boxShadow};
  }
`;
