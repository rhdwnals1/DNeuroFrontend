import React, { Fragment, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { justifyCenter, theme, imgUrl } from "../../styles/CommonStyle";
import { SJ_API, SIGNUP_DATA } from "../../config";
import { useHistory, Link } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRePw] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [nation, setNation] = useState([]);
  const [monthBirth, setMonthBirth] = useState([]);
  const [mailList, setMailList] = useState([]);

  const idValue = id + "@" + email;
  const birthValue = year + "-" + month + "-" + day;

  useEffect(() => {
    fetch(SIGNUP_DATA)
      .then((res) => res.json())
      .then((res) => setNation(res.nationality));
    fetch(SIGNUP_DATA)
      .then((res) => res.json())
      .then((res) => {
        setMonthBirth(res.birthMonth);
        setMailList(res.mail);
      });
  }, []);

  console.log(mailList);

  const goToMain = (e) => {
    e.preventDefault();
    fetch(`${SJ_API}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: idValue,
        password: pw,
        country: nationality,
        sex: gender,
        birthday: birthValue,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        if ((res.messege = "SUCCESS")) {
          alert("회원가입 성공");
          history.push("/");
        } else {
          alert("실패!");
        }
      });
  };

  const handleChangeId = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePw = (e) => {
    const { value } = e.target;
    setPw(value);
  };

  const handleChangeRePw = (e) => {
    const { value } = e.target;
    setRePw(value);
  };

  const handleChangeYear = (e) => {
    const { value } = e.target;
    setYear(value);
  };

  const handleChangeMonth = (e) => {
    const { value } = e.target;
    setMonth(value);
  };

  const handleChangeDay = (e) => {
    const { value } = e.target;
    setDay(value);
  };

  const handleChangeGender = (e) => {
    const { value } = e.target;
    setGender(value);
  };

  const handleNationality = (e) => {
    const { value } = e.target;
    setNationality(value);
  };

  console.log(idValue, pw, gender, nationality, birthValue);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Background>
          <WrapSignUp>
            <Header>
              <HeaderImage src={imgUrl.logo} />
            </Header>
            <Body>
              <BodyHeader>회원가입</BodyHeader>
              <InfoNeed>
                <WrapEmail>
                  <h3>이메일</h3>
                  <WrapInput>
                    <IdInput
                      placeholder="아이디를 입력해주세요."
                      onChange={handleChangeId}
                    ></IdInput>
                    <span>@</span>
                    <EmailInput onChange={handleChangeEmail}>
                      <option>이메일을 선택해주세요</option>
                      {mailList &&
                        mailList.map((mail) => {
                          console.log(mail.Email);
                          return <option>{mail.Email}</option>;
                        })}
                    </EmailInput>
                  </WrapInput>
                </WrapEmail>
                <WrapPassword>
                  <h3>비밀번호</h3>
                  <p>8자 이상 입력해주세요.</p>
                  <PwInput type="password" onChange={handleChangePw} />
                </WrapPassword>
                <WrapPassword>
                  <h3>비밀번호 확인</h3>
                  <PwInput type="password" onChange={handleChangeRePw} />
                </WrapPassword>
                <WrapBirth>
                  <h3>생년월일</h3>
                  <WrapDateInput>
                    <DateInput placeholder="년" onChange={handleChangeYear}></DateInput>
                    <MonthInput onChange={handleChangeMonth}>
                      <option>월</option>
                      {monthBirth[0] &&
                        monthBirth.map((el) => {
                          return <option key={el.id}>{el.month}</option>;
                        })}
                    </MonthInput>
                    <DateInput placeholder="일" onChange={handleChangeDay}></DateInput>
                  </WrapDateInput>
                </WrapBirth>
                <WrapGender>
                  <h3>성별</h3>
                  <WrapGenderInput>
                    <GenderInput onChange={handleChangeGender}>
                      <option>선택해주세요</option>
                      <option>남자</option>
                      <option>여자</option>
                    </GenderInput>
                  </WrapGenderInput>
                </WrapGender>
                <WrapNationality>
                  <h3>국적</h3>
                  <NationalityInput onChange={handleNationality}>
                    <option>선택해주세요</option>
                    {nation[0] &&
                      nation.map((el) => {
                        return <option key={el.id}>{el.country}</option>;
                      })}
                  </NationalityInput>
                </WrapNationality>
              </InfoNeed>
              <Agreement>
                <h3>약관 동의</h3>
                <WrapContents>
                  <AgreeAll>
                    <CheckBox type="checkbox" />
                    <h4>전체 동의</h4>
                  </AgreeAll>
                  <Clauses>
                    <Clause>
                      <CheckBox type="checkbox" />
                      <span>만 14세 이상입니다.</span>
                    </Clause>
                    <Clause>
                      <CheckBox type="checkbox" />
                      <span>
                        <Link to="">이용약관</Link>
                      </span>
                    </Clause>
                    <Clause>
                      <CheckBox type="checkbox" />
                      <span>
                        <Link to="">개인정보처리방침</Link>
                      </span>
                    </Clause>
                    <Clause>
                      <CheckBox type="checkbox" />
                      <span>이벤트, 프로모션 알림 메일 및 SMS 수신</span>
                    </Clause>
                  </Clauses>
                </WrapContents>
              </Agreement>
              <CompleteBtn>
                <Button onClick={goToMain}>회원가입</Button>
              </CompleteBtn>
            </Body>
          </WrapSignUp>
        </Background>
      </Fragment>
    </ThemeProvider>
  );
};

export default SignUp;

const Background = styled.section`
  ${justifyCenter}
`;

const WrapSignUp = styled.section`
  width: 400px;
  padding: 20px;
`;

const Header = styled.section`
  ${justifyCenter}
  margin: 50px 0 0 0;
`;

const HeaderImage = styled.img`
  width: 110px;
  height: 120px;
  margin: 0 0 50px 0;
`;

const Body = styled.section``;

const BodyHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 50px 0;
`;

const InfoNeed = styled.div``;

const WrapEmail = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding-top: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const WrapInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  span {
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.1);
  }
`;

const IdInput = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;

  &::placeholder {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const EmailInput = styled.select`
  width: 50%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
  padding: 3px;
`;

const WrapPassword = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 40px;

  p {
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    font-weight: normal;
  }
`;

const PwInput = styled.input`
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
`;

const WrapBirth = styled.div`
  margin-top: 40px;
  font-size: 1rem;
  font-weight: bold;
`;

const WrapDateInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  span {
    font-size: 13px;
    font-weight: normal;
  }
`;

const DateInput = styled.input`
  width: 31%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
`;

const MonthInput = styled.select`
  width: 31%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
`;

const WrapGender = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 40px;
`;

const WrapGenderInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const GenderInput = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
`;

const WrapNationality = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 40px;
`;

const NationalityInput = styled.select`
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 15px;
  outline-style: none;
`;

const Agreement = styled.div`
  margin-top: 50px;
  font-size: 1rem;
  font-weight: bold;
`;

const WrapContents = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: bold;
`;

const AgreeAll = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
`;

const Clauses = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: normal;
`;

const Clause = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 20px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CompleteBtn = styled.form`
  margin: 50px 0 100px 0;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #000;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700px;
  outline-style: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    cursor: pointer;
  }
`;
