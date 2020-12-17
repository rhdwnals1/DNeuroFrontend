import React, { Component, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { SURVEY_DATA, AWS_API } from "../../config";
import { flexCenter } from "../../styles/CommonStyle";

const Survey = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${AWS_API}/survey/start`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const changeBtnColor = () => {};

  console.log(data);
  return (
    <Fragment>
      <WrapSurvey>
        <Header>
          <span>핵심 능력 테스트</span>
          <span>/</span>
        </Header>
        <WrapMain>
          <Question>
            <h1>
              <div className="emphasis">자유시간</div>이 있을때 나는
            </h1>
          </Question>
          <Answer>
            <Button onClick={changeBtnColor}>오늘도 개미는 일을 하지요</Button>
            <p>vs</p>
            <Button>잇테익스 투 두 탱고 탱고 망고 망고</Button>
          </Answer>
        </WrapMain>
      </WrapSurvey>
    </Fragment>
  );
};

export default Survey;

const WrapSurvey = styled.section`
  ${flexCenter};
  flex-direction: column;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  width: 360px;
  padding: 170px 24px 0 24px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
`;

const WrapMain = styled.section`
  padding-top: 100px;
`;

const Question = styled.div`
  text-align: center;
  font-size: 30px;
  h1 {
    .emphasis {
      color: #632ed8;
      font-weight: bold;
    }
  }
`;

const Answer = styled.div`
  ${flexCenter};
  flex-direction: column;
  padding-top: 80px;

  p {
    color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    font-size: 24px;
  }
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding: 30px 50px;
  font-size: 16px;
  outline-style: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;
