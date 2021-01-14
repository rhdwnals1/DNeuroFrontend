import React, { Fragment } from "react";
import styled from "styled-components";
import HalfDoughnut from "../../Result/Component/HalfDoughnut";
import HalfDoughnuts from "../../Result/Component/HalfDoughnuts";
import { textNumber, justifyCenter } from "../../../styles/CommonStyle";

const ShowResult = ({ content }) => {
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
    </Fragment>
  );
};

export default ShowResult;

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
  display: flex;
  justify-content: center;
  margin: 50px 0;
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
  margin: 50px 0 100px;
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
