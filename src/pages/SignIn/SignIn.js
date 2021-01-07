import React, { useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { LOGINIMAGE } from "../SignIn/data/data";
import { SJ_API, HS_API } from "../../config";
import { boxShadow, theme, imgUrl } from "../../styles/CommonStyle";

const { Kakao } = window;

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //일반 로그인
  const goToMain = (e) => {
    e.preventDefault();
    fetch(`${SJ_API}/user/signin`, {
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
          // history.push({ pathname: "/Main", state: { res } });
          window.location.replace("/Main");
        } else {
          alert("이메일 또는 비밀번호를 확인해주세요.");
        }
      });
  };

  // const kakaoToken = localStorage.kakao_2d5e6d01d349bd67f12aeeb71f46cb15;

  //카카오톡 로그인
  const goToKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
        fetch(`${HS_API}/user/kakao`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            // 카카오 응답 테스트 console.log
            console.log("res : ", res);
            if (!localStorage.Kakao_token) {
              localStorage.setItem("token", res.token);
              if (res.token) {
                alert("Dneuro에 오신걸 환영합니다!");
                // history.push("/Main");
                window.location.replace("/Main");
              }
            } else {
              alert("이미 로그인 되어 있습니다.");
              history.push({ pathname: "/Main", state: { res } });
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
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
          <img src={imgUrl.logo} alt="logo" />
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
          <Link to="/Certification">회원가입</Link>
        </SignUp>
        <SNS>SNS 계정으로 로그인 하기</SNS>
        <SnsContainer>
          {LOGINIMAGE.map((img) => {
            return (
              <SnsLogin onClick={img.alt === "카카오톡" ? goToKakao : ""}>
                <img key={img.id} src={img.src} alt={img.alt} />
              </SnsLogin>
            );
          })}
        </SnsContainer>
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
  border-radius: 25px;
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
  font-weight: 500;
  line-height: 1.4;

  &:hover {
    cursor: pointer;
    width: 80px;
    height: 30px;
    padding-top: 4px;
    border: 1px solid ${theme.pink};
    border-radius: 15px;
    color: #ffffff;
    background-color: ${theme.pink};
    ${boxShadow}
  }
`;

const SNS = styled.div`
  text-align: center;
  font-size: 14px;
  color: #424242;
  font-weight: 500;
  margin: 30px auto 10px;

  &:hover {
    cursor: pointer;
    width: 180px;
    height: 30px;
    padding-top: 7px;
    border: 1px solid ${theme.pink};
    border-radius: 15px;
    color: #ffffff;
    background-color: ${theme.pink};
    ${boxShadow}
  }
`;

const SnsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const SnsLogin = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SignIn;
