import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

function HalfDoughnut({ loss }) {
  const state = {
    datasets: [
      {
        data: [(100 / 7) * loss, 100 - (100 / 7) * loss],
        backgroundColor: ["#fbcac9", "#dfdfdf"],
        hoverBackgroundColor: ["#fbcac9", "#dfdfdf"],
      },
    ],
  };

  const setting = {
    width: 270,
    height: 200,
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
      <Half>
        <Doughnut data={state} {...setting} />
      </Half>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Half = styled.div`
  margin: 0 auto;
`;

export default HalfDoughnut;
