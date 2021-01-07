import React, { Fragment, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { flexCenter, imgUrl, theme } from "../../styles/CommonStyle";
import { SJ_API, HS_API } from "../../config";

const Certification = ({ history }) => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certifiedNumber, setCertifiedNumber] = useState("");
  const [authResult, setAuthResult] = useState();

  const handleUserName = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handlePhoneNumber = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  const handleCertification = (e) => {
    const { value } = e.target;
    setCertifiedNumber(value);
  };

  const postPhoneNumber = () => {
    fetch(`${SJ_API}/user/sms`, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        if (res.message === "SUCCESS") {
          alert("인증번호가 발송되었습니다.");
        }
      });
  };

  const checkValidation = () => {
    fetch(`${SJ_API}/user/sms?phone_number=${phoneNumber}&auth_number=${certifiedNumber}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        if (res.message === "SUCCESS") {
          alert("인증 성공!");
          setAuthResult(res.message);
        } else {
          alert("인증번호를 확인해주세요.");
        }
      });
  };

  const goToSignUp = () => {
    if (authResult === "SUCCESS") {
      history.push("/SignUp");
    } else {
      alert("문자인증을 해야 합니다.");
    }
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Certify>
          <Logo src={imgUrl.logo} alt="디뉴로 로고" />
          <WrapHeader>
            <Header>본인 인증</Header>
          </WrapHeader>
          <WrapMain>
            <Main>
              <WrapUser>
                <Inputbox onChange={handleUserName} placeholder="이름" />
              </WrapUser>
              <WrapNumber>
                <Inputbox onChange={handlePhoneNumber} placeholder="전화번호" />
              </WrapNumber>
              <ConfirmButton onClick={postPhoneNumber}>인증</ConfirmButton>
            </Main>
          </WrapMain>
          <CertifyNumber>
            <span>인증번호를 입력 해주세요.</span>
            <CertifyInputbox onChange={handleCertification} />
            <ConfirmButton onClick={checkValidation}>확인</ConfirmButton>
            <SignUpButton onClick={goToSignUp}>회원가입으로 이동</SignUpButton>
          </CertifyNumber>
        </Certify>
      </ThemeProvider>
    </Fragment>
  );
};

export default Certification;

const Logo = styled.img`
  width: 120px;
  height: 110px;
  margin: 70px 0;
`;

const Certify = styled.section`
  font-size: 25px;
  ${flexCenter};
  flex-direction: column;
`;

const WrapHeader = styled.div`
  ${flexCenter};
  width: 1200px;

  background-color: #fff;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
`;

const Header = styled.h1`
  ${flexCenter};
  width: 600px;
  padding: 20px;
  margin-bottom: 40px;
  color: #000;
  /* background-color: ${theme.skyblue}; */
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
`;

const WrapMain = styled.div`
  width: 1200px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
`;

const Main = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin: 40px 0;
  font-size: 17px;
`;

const WrapUser = styled.div`
  ${flexCenter};
  margin-bottom: 20px;

  span {
    margin-right: 27px;
  }
`;
const WrapNumber = styled.div`
  ${flexCenter};

  span {
    margin-right: 27px;
  }
`;

const ConfirmButton = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${theme.pink};
  outline-style: none;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
  }
`;

const Inputbox = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 5px 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  outline-style: none;
`;

const CertifyNumber = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 40px;

  span {
    margin-bottom: 30px;
    font-size: 16px;
  }
`;

const CertifyInputbox = styled(Inputbox.withComponent("input"))`
  width: 150px;
  margin-top: -5px;
`;

// const SignUpButton = styled(ConfirmButton.withComponent("button"));
const SignUpButton = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 90px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${theme.navy};
  outline-style: none;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
  }
`;
