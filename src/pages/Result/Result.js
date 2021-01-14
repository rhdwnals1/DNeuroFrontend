import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { textNumber } from "../../styles/CommonStyle";
import { SJ_API, HS_API } from "../../config";
import { boxShadow, justifyCenter, theme, imgUrl } from "../../styles/CommonStyle";
import HalfDoughnut from "./Component/HalfDoughnut";
import HalfDoughnuts from "./Component/HalfDoughnuts";

const Result = () => {
  const history = useHistory();
  const goToMain = () => {
    history.push("/Main");
  };

  const [content, setContent] = useState();

  useEffect(() => {
    fetch(`${SJ_API}/survey/result`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
      });
  }, []);

  const loss = content && content.loss_evasion_evaluation;
  const risk = content && content.risk_evasion_evaluation;
  const resultObj = content && content.evasion_grade;
  const lossData = content && resultObj[loss];
  const riskData = content && resultObj[risk];

  const titleData = content && content.mbti.slice(0, content.mbti.indexOf("|"));
  const firstContent =
    content && content.mbti.slice(content.mbti.indexOf("|") + 1, content.mbti.lastIndexOf("|"));
  const secondContent = content && content.mbti.slice(content.mbti.lastIndexOf("|") + 1);

  return (
    <Fragment>
      <WrapResult>
        <Logo>
          <img onClick={goToMain} src={imgUrl.logo} alt="Logo" />
        </Logo>
        <Explain>
          <div>나의 유형은 ?</div>
        </Explain>
        <Title>{titleData}</Title>
        <FirstContent>"{firstContent}"</FirstContent>
        <SecondContent>{secondContent}</SecondContent>
        <Video>
          <video
            src="https://videos.files.wordpress.com/hQlgtevQ/dolar-man-1024-video_hd.mp4"
            autoplay
            loop
            muted="muted"
            playsInline
            controlsList="nodownload"
          />
        </Video>
        <HighRight>
          <Doughnut>
            <div className="loss">loss evasion evaluation </div>
            <div className="text">" {lossData} "</div>
            <div className="score">{loss}점</div>
            <HalfDoughnut loss={loss} />
            <span className="minNumber">1점</span>
            <span className="maxNumber">7점</span>
          </Doughnut>
          <Line />
          <Doughnut>
            <div className="risk">risk evasion evaluation</div>
            <div className="text">" {riskData} "</div>
            <div className="score">{risk}점</div>
            <HalfDoughnuts risk={risk} />
            <span className="minNumber">1점</span>
            <span className="maxNumber">7점</span>
          </Doughnut>
        </HighRight>
        <Button onClick={goToMain}>테스트 다시하기</Button>
      </WrapResult>
    </Fragment>
  );
};

export default Result;

const WrapResult = styled.section`
  ${justifyCenter}
  flex-direction: column;
  width: 850px;
  margin: 50px auto;
  background-color: rgba(255, 255, 224, 0.2);
`;

const Logo = styled.div`
  ${justifyCenter}

  img {
    width: 110px;
    height: 120px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Explain = styled.div`
  div {
    ${justifyCenter}
    margin: 35px 0 20px;
    font-size: 33px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const Video = styled.div`
  margin: 0 auto;
  video {
    width: 300px;
    height: 300px;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(to right, #4364f7, #23d5ab);
  -webkit-background-clip: text;
  color: transparent;
`;

const FirstContent = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;

const SecondContent = styled.div`
  margin: 30px 180px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
  background: linear-gradient(to right, #4364f7, #23d5ab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HighRight = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Doughnut = styled.div`
  margin: 0 auto;
  position: relative;

  .minNumber {
    ${textNumber};
    left: 20px;
  }

  .maxNumber {
    ${textNumber};
    right: 20px;
  }

  .loss {
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    color: #fff;
  }

  .text {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    color: #938cce;
  }

  .score {
    margin-top: 20px;
    text-align: center;
    font-size: 25px;
    font-weight: 800;
    color: #4c4c4c;
  }

  .risk {
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    color: #fff;
  }
`;

const Line = styled.div`
  margin-top: 50px;
  width: 1px;
  height: 330px;
  background-color: #e2e2e1;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 71px;
  margin: 80px auto;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${theme.pink};
  color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
    ${boxShadow};
  }
`;
