import React, { useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { SIGNIN_API } from "../../config";
import { boxShadow, theme } from "../../styles/CommonStyle";
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
          <img
            src="https://lh3.googleusercontent.com/-sfYTUM5rL-9wWBbnWrQ-fKLNS01kKHJ0FiT1v3fbcnsaquk0_DP9kMQosYbGgIyD2jHXQO5EqMbYba4MFftVwEORWP7-0AESDUWDlQ4fxhTIupoxr8OTi_2wVHEnX0mpf1jC-P2gbFcwpj6QzybsGcfOkg09g2Mvh84AAw2N38rL_3fg0d_49nz2ksYNWAY1eGahZIbSZdNwJYd5oRY5AUElSs2rhA9qxHFVMOr845-F7XpqKtkaFDU-icYbi-kL1gqggr4ZQbKnLu6gvXWzqaeCmJ2RM9aSQmwjIgPtJSEsjdvzYsVHL8y5j6kzYGF3z0na7M_RLJpWM8MjCA9-_Zep-48uS4LTC5zet1N7Q3opEYPNyMz2womV7pfxAOsf0W4CfKwBX7Bj8L86Co4e81GJW73LkDqmbFVHs-Ak3cJLFoCmmwqcoA5TuX-FVHy4dbyDjPZ1fd5II6CUS1VSEw8GVdvdSPIsWMSrLOLXtQK4OW0zAkXrZOr2K1CJXwESM2NCWOc_EkKPld1GH0WIY_Va55EjxqT8teAEL7RAfc87maRElXbfoTkHhKViFqbTeMum8FIDu6AdwfRzaSBJGLkOidRsN1kts5k7dGWApAvQm1T9jQ1aIQWA8BnhDogKswlF6hx6mIlSzYQlOd1t-MZit65M3ibbuukVGwg1aNo8-3yI_AkLZD06pA5MQ=w869-h980-no?authuser=0"
            alt="logo"
          />
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
    width: 110px;
    height: 120px;
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
  background-color: ${theme.pink};
  border: 1px solid ${theme.pink};
  border-radius: 20px;
  color: #fff;
  font-size: 17px;
  line-height: 1.41;
  font-weight: bold;

  .content {
    padding-top: 2px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.pink};
    ${boxShadow}
  }
`;

const SignUp = styled.div`
  margin: 1px 0;
  text-align: center;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  &:hover {
    cursor: pointer;
    width: 80px;
    height: 20px;
    border: 1px solid ${theme.pink};
    border-radius: 15px;
    color: #ffffff;
    background-color: ${theme.pink};
  }
`;

export default SignIn;
