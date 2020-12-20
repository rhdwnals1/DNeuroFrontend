/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
import { cleanup } from "@testing-library/react";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { AWS_API } from "../../config";
import { flexCenter, boxShadow, theme } from "../../styles/CommonStyle";

const Survey = () => {
  const history = useHistory();
  const [progress, setProgress] = useState();
  const [survey, setSurvey] = useState();
  const [oldTime, setOldTime] = useState();
  const [currentTime, setCurrentTime] = useState(0);

  const progressCurrent = progress && progress.current;
  const progressTotal = progress && progress.total;
  const surveyId = survey && survey.id;
  const surveyContent = survey && survey.content;
  const questionIdx = surveyContent && surveyContent.indexOf("A");
  const firstAnswer = surveyContent && surveyContent.indexOf("B");

  const firstFetch = () => {
    fetch(`${AWS_API}/survey/start`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProgress(result.progress);
        setSurvey(result.survey);
      });
  };
  const countTime = () => {
    let getTime = new Date().getSeconds();
    return getTime;
  };

  useEffect(() => {
    firstFetch();
    setOldTime(countTime());
  }, []);

  const postAnswerA = () => {
    fetch(`${AWS_API}/survey/input`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        survey_id: survey && survey.id,
        answer: "A",
        time: testTime,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCurrentTime(countTime());

        if (res.survey.survey.id > 6) {
          history.push("/Result");
        }
      });
  };

  const testTime = +currentTime - +oldTime;
  console.log(testTime);

  const postAnswerB = () => {
    fetch(`${AWS_API}/survey/input`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        survey_id: surveyId,
        answer: "B",
        time: 20,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const resetTest = () => {
    fetch(`${AWS_API}/survey/reset`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <WrapSurvey>
          <SurveyBackground>
            <Header>
              <span>Investment Risk Profiling</span>
            </Header>
            <WrapMain>
              <Question>
                <h1>
                  <div className="emphasis">{survey && surveyContent.slice(0, questionIdx)}</div>
                </h1>
              </Question>
              <Answer>
                <Button onClick={postAnswerA}>
                  {survey && surveyContent.slice(questionIdx, firstAnswer)}
                </Button>
                <p>vs</p>
                <Button onClick={postAnswerB}>{survey && surveyContent.slice(firstAnswer)}</Button>
                <div className="WrapBottomButton">
                  <Retest onClick={resetTest}>다시 검사하기</Retest>
                </div>
              </Answer>
            </WrapMain>
            <LogoImage src="https://lh3.googleusercontent.com/VbAt1Idbi-4NHicLjzGdgRFA9hd8hoaOk6SGD2be-BOrNzjlHcHSefupjSDPDkT3M2U40Eu2YOhY9wvAr_F_P7ZI9NOFAuUHvaliXyZ6ap_qAkV2fI2IDKHw17c7ULEL_JcLmmbQTgP2L6mPiiWPgjkXHB9pGL2RNX1TTLoa8E1gVMA2BvWWn7fD8u5kNqk4FYSSq096sZ6ZlEkNsjtezfuI_yd4XUCcEcWW1An41vgwIbcI8tyK-1ZV3IXjC8WF6KUyceEfgBa7hGuO-XDMGwGymBbl156OeEcz6k1VlNQsuunAw-jLll5CfzTmsYgGeuT2gn9U9pZnkAtq3QrK6Ub7AhfJC64MWlvTPbLy4eR1qTMd6w5fE_lvqo548Yx9BngYxUPyIKgA69aFygz5COyY3bZ73pKK1t9-t8OnOE2w27_gxIoIk2JLBfYlLOFlBJI73JPpHQ0AqJHz48Sm2XKjjDtCBDdnSJ4SEfdAJEjgYuGwbR8tpawVwsnQ4vinZvCZlgadMDbmdnU74LU28z4SOPeBvjUnwjN3x7jbUfQuBw--e0gVsdOwu08MiwBXWf_7LigknjlQ7c9RgybqG72e1RoZzcc_y3h6RNOY2nO71aOupVk3MX6u8MZ0mfOSUeLTxjSL1wyKgubbgqJult-E8rf95IiYL3F5T0GxF5qGi3_QxkCExcWpWweZeQ=w869-h980-no?authuser=0" />
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
  justify-content: center;
  padding: 80px 50px 0;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-weight: bold;
`;

const WrapMain = styled.section`
  padding-top: 80px;
`;

const Question = styled.div`
  font-size: 20px;
  text-align: center;

  h1 {
    .emphasis {
      width: 380px;
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
  ${flexCenter};
  flex-direction: column;
  padding-top: 80px;

  p {
    padding: 10px 0;
    color: rgba(0, 0, 0, 0.4);
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 360px;
  padding: 30px 50px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  font-size: 18px;
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
  margin: 50px 10px 0 20px;
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
