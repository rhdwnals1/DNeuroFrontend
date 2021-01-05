import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { textNumber } from "../../../styles/CommonStyle";

function HalfDoughnut({ loss, risk, lossData, riskData }) {
  const state = {
    datasets: [
      {
        data: [(100 / 7) * loss, 100 - (100 / 7) * loss],
        backgroundColor: ["#fbcac9", "#dfdfdf"],
        hoverBackgroundColor: ["#fbcac9", "#dfdfdf"],
      },
    ],
  };

  const data = {
    datasets: [
      {
        data: [(100 / 7) * risk, 100 - (100 / 7) * risk],
        backgroundColor: ["#8ca6ce", "#dfdfdf"],
        hoverBackgroundColor: ["#8ca6ce", "#dfdfdf"],
      },
    ],
  };

  const setting = {
    width: 350,
    height: 280,
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 60,
      responsive: false,
      responsiveAnimationDuration: 10,
    },
  };
  return (
    <Wrapper>
      <div className="loss">loss evasion evaluation </div>
      <div className="text">{lossData}</div>
      <div className="score">{loss}점</div>
      <Doughnut data={state} {...setting} />
      <div className="minNumber">1</div>
      <div className="maxNumber">7</div>
      <div className="risk">risk evasion evaluation</div>
      <div className="text">{riskData}</div>
      <div className="score">{risk}점</div>
      <Doughnut data={data} {...setting} />
      <div className="min">1</div>
      <div className="max">7</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .minNumber {
    ${textNumber};
    top: 395px;
    left: -24px;
  }

  .maxNumber {
    ${textNumber};
    top: 395px;
    right: -24px;
  }

  .min {
    ${textNumber};
    top: 865px;
    left: -24px;
  }

  .max {
    ${textNumber};
    top: 865px;
    right: -24px;
  }

  .risk {
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    color: #fff;
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
  }

  .score {
    margin-top: 20px;
    text-align: center;
    font-size: 25px;
    font-weight: 800;
  }
`;

export default HalfDoughnut;
