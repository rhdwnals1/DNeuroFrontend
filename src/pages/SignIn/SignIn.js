import React, { useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { SIGNIN_API } from "../../config";
<<<<<<< HEAD
=======
import { boxShadow, theme, imgUrl } from "../../styles/CommonStyle";
>>>>>>> d2646c884be6f5518cf95af11050b07408f9609b
import styled from "styled-components";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToMain = (e) => {
    e.preventDefault();
    fetch(`${SIGNIN_API}`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("백엔드 : ", res);
        if (res.token) {
          localStorage.setItem("token", `${res.token}`);
          alert("로그인에 성공하셨습니다.");
          history.push({ pathname: "/Main", state: { res } });
        } else {
          alert("이메일 또는 비밀번호를 확인해주세요.");
        }
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Fragment>
      <WrapSignIn>
        <Logo>
<<<<<<< HEAD
          <img src="/images/JM/dneuro.png" alt="logo" />
=======
          <img src={imgUrl.logo} alt="logo" />
>>>>>>> d2646c884be6f5518cf95af11050b07408f9609b
        </Logo>
        <Login>
          <input
            className="id"
            value={email}
            type="text"
            placeholder="이메일"
            onChange={(e) => handleEmail(e)}
          />
          <input
            className="pw"
            value={password}
            type="password"
            placeholder="비밀번호"
            onChange={(e) => handlePassword(e)}
          />
        </Login>
        <Button onClick={goToMain}>
          <div className="content">로그인</div>
        </Button>
        <SignUp>
          <Link to="/signup">회원가입</Link>
        </SignUp>
      </WrapSignIn>
    </Fragment>
  );
};

const WrapSignIn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 170px auto;
  padding: 40px 30px;
`;

const Logo = styled.div`
  img {
    width: 200px;
    height: 60px;
  }
`;

const Login = styled.div`
  input {
    display: block;
    width: 300px;
    height: 50px;
    padding: 0 15px;
    color: #7c7c7c;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    box-shadow: 1px 1px rgba(50, 50, 93, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08);
    font-size: 15px;
    transition: 0.2s border-color, 0.2s box-shadow, 0.2s background-color;

    &:hover {
      cursor: text;
    }

    &:focus {
      background-color: #fafafa;
    }
  }

  .id {
    margin: 50px 0 0 0;
    border-radius: 4px 4px 0 0;
  }

  .pw {
    margin: 0;
    border-radius: 0 0 4px 4px;
    border-top: 0px;
  }
`;

const Button = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  margin: 30px 0;
  padding: 13px 15px;
  background-color: #becc01;
  border: 1px solid #becc01;
  border-radius: 4px;
  color: #ffffff;
  font-size: 17px;
  line-height: 1.41;
  font-weight: bold;

  .content {
    padding-top: 2px;
  }

  &:hover {
    cursor: pointer;
    background-color: #99a400;
  }
`;

const SignUp = styled.div`
  margin: 1px 0;
  text-align: center;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export default SignIn;
