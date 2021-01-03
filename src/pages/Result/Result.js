import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RESULT_DATA } from "../../config";
import { boxShadow, justifyCenter, theme } from "../../styles/CommonStyle";
import HalfDoughnut from "./Component/HalfDoughnut";

const Result = () => {
  const history = useHistory();
  const goToMain = () => {
    history.push("/Main");
  };

  const [content, setContent] = useState();

  useEffect(() => {
    fetch(`${RESULT_DATA}`)
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

  return (
    <Fragment>
      <WrapResult>
        <Logo>
          <img src="/images/JM/dneurologo.png" alt="Logo" />
        </Logo>
        <Explain>
          <div>나의 유형은 ?</div>
        </Explain>
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
        <Doughnut>
          <div className="HalfDoughnut">
            <HalfDoughnut
              lossData={lossData}
              riskData={riskData}
              loss={loss}
              risk={risk}
            />
          </div>
        </Doughnut>
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
  background-color: rgba(255, 255, 224, 0.2);
`;

const Logo = styled.div`
  ${justifyCenter}

  img {
    width: 110px;
    height: 120px;
  }
`;

const Explain = styled.div`
  div {
    ${justifyCenter}
    margin-top: 35px;
    font-size: 29px;
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

const Doughnut = styled.div`
  margin: 0 auto;
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
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #222;
      margin-bottom: 24px;
    }

    &:last-child {
      font-size: 45px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${theme.pink};
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 71px;
  margin: 40px auto;
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
