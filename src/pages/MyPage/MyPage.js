import React, { Fragment, useState, useEffect } from "react";
import Nav from "../Main/Component/Nav";
import styled from "styled-components";
import { flexCenter } from "../../styles/CommonStyle";
import { SJ_API } from "../../config";
import ShowResult from "./components/ShowResult";

const MyPage = () => {
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

  console.log(content && content);

  return (
    <Fragment>
      <WrapBody>
        <Nav />
        <MyPageNav>
          <TestResult>결과 다시보기</TestResult>
        </MyPageNav>
        <WrapMain>
          <ShowResult content={content} />
        </WrapMain>
      </WrapBody>
    </Fragment>
  );
};

export default MyPage;

const WrapBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPageNav = styled.section`
  ${flexCenter};
  padding: 20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #222;
  font-size: 25px;
  font-weight: 700;
`;

const Profile = styled.div`
  padding: 0 20px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.1s;
  }
`;

const TestResult = styled(Profile.withComponent(`div`))`
  border: none;
`;

const WrapMain = styled.section`
  max-width: 1500px;
`;
