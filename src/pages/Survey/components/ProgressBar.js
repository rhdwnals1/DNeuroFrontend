import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { flexCenter, boxShadow, theme, imgUrl } from "../../../styles/CommonStyle";

const ProgressBar = ({ value, max, color, width, id }) => {
  ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
  };

  ProgressBar.defaultProps = {
    max: 100,
    color: `${theme.pink}`,
    width: "300px",
  };

  return (
    <Fragment>
      <Container color={color} width={width}>
        <progress value={value} max={max} />
        <span>{id}/13</span>
      </Container>
    </Fragment>
  );
};

export default ProgressBar;

const Container = styled.div`
  ${flexCenter};
  margin-bottom: 70px;

  progress[value] {
    width: ${(props) => props.width};
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.15);
  }

  progress[value]::-webkit-progress-value {
    height: 20px;
    border-radius: 10px;
    background-color: ${(props) => props.color};
  }

  span {
    padding: 5px 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;
