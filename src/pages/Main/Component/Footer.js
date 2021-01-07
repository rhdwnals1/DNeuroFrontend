import React from "react";
import styled from "styled-components";

const FOOTERLIST = [
  {
    id: 0,
    name: "회사소개",
  },
  {
    id: 1,
    name: "채용정보",
  },
  {
    id: 2,
    name: "이용약관",
  },
  {
    id: 3,
    name: "개인정보처리방침",
  },
  {
    id: 4,
    name: "공지사함",
  },
  {
    id: 5,
    name: "고객센터",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <CustomerCenter>문의</CustomerCenter>
          <Telephone>1234-5678</Telephone>
          <Date>10:00 ~ 18:00 (주말 & 공휴일 제외)</Date>
        </Top>
        <FooterList>
          {FOOTERLIST.map((list) => {
            return <div className="listName">{list.name}</div>;
          })}
        </FooterList>
        <DetailContent>
          <div className="information">
            상호명 : (주)디뉴로Dneuro &nbsp; 이메일 : (고객문의) cs@dnuero.net &nbsp; 대표이사 :
            김승종, 조금택 &nbsp; 사업자등록번호 : 123-45-67890 &nbsp; 주소 : 서울시 영등포구
            의사당대로 83 한국휴렛팩커드빌딩{" "}
          </div>
          <div className="information">
            NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시, 저희 사이트에서 가입한
            구매안전 서비스를 이용할 수 있습니다.
          </div>
          <div className="copyright">Copyright © 2020 by DNEURO, Inc. All rights reserved</div>
        </DetailContent>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fafafa;
  z-index: 100;
`;

const Container = styled.div`
  padding: 30px 60px 40px;
  margin: 0 auto;
`;

const Top = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CustomerCenter = styled.div`
  font-weight: bold;
  color: #424242;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Telephone = styled.div`
  margin: 2px 0 0;
  color: #424242;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
`;

const Date = styled.div`
  color: #757575;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.4px;

  &:hover {
    cursor: pointer;
  }
`;

const FooterList = styled.div`
  display: flex;
  margin: 20px 0;

  .listName {
    height: 20px;
    margin-right: 6px;
    padding: 2px;
    color: #424242;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const DetailContent = styled.div`
  .information {
    font-size: 10px;
    color: #757575;
    line-height: 19px;
  }

  .copyright {
    margin-top: 10px;
    font-size: 10px;
    color: #424242;
    line-height: 17px;
  }
`;

export default Footer;
