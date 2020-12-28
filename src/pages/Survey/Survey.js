/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
import { cleanup } from "@testing-library/react";
import React, { Fragment, useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import { VER1_API, VER2_API } from "../../config";
import { flexCenter, boxShadow, theme, imgUrl } from "../../styles/CommonStyle";

const Survey = () => {
  const history = useHistory();
  const [progress, setProgress] = useState();
  const [survey, setSurvey] = useState();
  const [oldTime, setOldTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const surveyId = survey && survey.id;
  const surveyContent = survey && survey.content;
  const questionIdx = surveyContent && surveyContent.indexOf("A");
  const firstAnswer = surveyContent && surveyContent.indexOf("B");
  const testTime = +currentTime - +oldTime;

  const getSurveyData = () => {
    fetch(
      // `${VER1_API}/survey/start`,
      `${VER2_API}/survey/start`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setProgress(result.progress);
        setSurvey(result.survey);
        console.log(result);
      });
  };

  const postAnswerA = () => {
    fetch(
      // `${VER1_API}/survey/input`
      `${VER2_API}/survey/input`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          survey_id: survey && survey.id,
          answer: "A",
          time: testTime,
        }),
      }
    );
  };

  const postAnswerB = () => {
    fetch(
      // `${VER1_API}/survey/input`
      `${VER2_API}/survey/input`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          survey_id: surveyId,
          answer: "B",
          time: testTime,
        }),
      }
    );
  };

  const countTime = () => {
    let getTime = new Date().getSeconds();
    return getTime;
  };

  const pressButtonA = () => {
    postAnswerA();
    // setCurrentTime(countTime());
    if (survey && survey.id === 13) {
      history.push("/Result");
    }
  };

  const pressButtonB = () => {
    postAnswerB();
    // setCurrentTime(countTime());
  };

  const resetTest = () => {
    getSurveyData();
  };

  useEffect(() => {
    getSurveyData();
    setOldTime(countTime());
  }, []);

  console.log(testTime);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <WrapSurvey>
          <SurveyBackground>
            <Header>
              <h1>Investment Risk Profiling</h1>
              <div className="surveyName">
                Question<span className="surveyNumber">"{survey && survey.id}"</span>
              </div>
            </Header>
            <WrapMain>
              <Question>
                <h1>
                  <div className="emphasis">{survey && surveyContent.slice(0, questionIdx)}</div>
                </h1>
              </Question>
              <Answer>
                <Button onClick={pressButtonA}>
                  {survey && surveyContent.slice(questionIdx, firstAnswer)}
                </Button>
                <p>vs</p>
                <Button onClick={pressButtonB}>{survey && surveyContent.slice(firstAnswer)}</Button>
              </Answer>
              <Retest onClick={resetTest}>다시 검사하기</Retest>
            </WrapMain>
            <LogoImage src={imgUrl.logo} />
          </SurveyBackground>
        </WrapSurvey>
      </Fragment>
    </ThemeProvider>
  );
};

export default Survey;

const WrapSurvey = styled.section`
  ${flexCenter};
  flex-direction: column;
`;

const SurveyBackground = styled.div`
  height: 100vh;
  padding: 0 40px;
  background-color: ${theme.ligthblue};
`;

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 50px 0;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-weight: bold;

  h1 {
    color: black;
    font-size: 30px;
  }

  .surveyName {
    margin: 25px 0 50px 0;
    font-size: 22px;

    .surveyNumber {
      margin-left: 5px;
      color: ${theme.pink};
    }
  }
`;

const WrapMain = styled.section`
  ${flexCenter};
  flex-direction: column;
`;

const Question = styled.div`
  font-size: 20px;
  text-align: center;

  h1 {
    .emphasis {
      width: 600px;
      padding: 35px;
      border-radius: 50px;
      color: #fff;
      background-color: ${theme.skyblue};
      font-weight: bold;
      line-height: 30px;
    }
  }
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0 50px 0;

  p {
    padding: 20px 0;
    color: rgba(0, 0, 0, 0.4);
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 300px;
  margin: 0 20px;
  height: 300px;
  padding: 30px 30px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  font-size: 22px;
  font-weight: bold;
  outline-style: none;

  &:hover {
    ${boxShadow}
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
    border: none;
    color: #fff;
    background-color: ${theme.pink};
  }
`;

const Retest = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: ${theme.pink};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  outline-style: none;

  &:hover {
    ${boxShadow}
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;

  margin: auto;
  margin-top: 50px;
`;
