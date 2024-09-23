import styled from "styled-components";
import img from "../../images/bgImg.png";

export const ContainerHero = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 1000px;
  background-position-x: 0px;
  background-position-y: -130px;
  margin-bottom: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1.7),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const MainHeroText = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 69px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding-top: 270px;
  margin-bottom: 30px;
  color: #ffffff;
`;

export const HeroText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;
  text-align: center;
  margin: 0;
  color: #ffffff;
`;

export const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 334px;
`;

export const ImgHeroItemFirst = styled.img`
  width: 64px;
  height: 21px;
`;

export const ImgHeroItemSecond = styled.img`
  width: 52px;
  height: 17px;
`;

export const ImgHeroItemThird = styled.img`
  width: 42px;
  height: 13px;
`;
