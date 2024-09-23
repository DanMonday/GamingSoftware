import styled from "styled-components";

export const ContainerOurFeature = styled.div`
  margin-bottom: 250px;
`;

export const OurFeatureBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FeatureBlock = styled.div`
  width: 640px;
  margin-right: ${(props) => (props.indent ? "67px" : "0")};
  margin-left: ${(props) => (props.indent ? "0" : "67px")};
`;

export const FeatureImg = styled.img`
  width: 550px;
  height: 550px;
`;

export const ShadowBlock = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  right: ${(props) => (props.side ? "0" : "unset")};
  left: ${(props) => (props.side ? "unset" : "0")};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(0, 0, 255, 0.4) 0%,
      /* Начальный цвет в центре */ rgba(0, 0, 255, 0.1) 43%,
      /* Плавный переход к более прозрачному цвету */ rgba(0, 0, 255, 0) 100%
        /* Прозрачный цвет на краях */
    );
    filter: blur(20px); /* Размытие для мягкого перехода */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2; /* Контент выше фона */
  }
`;

export const FeatureMainText = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;

  margin-top: 0;
  margin-bottom: 26px;

  color: #2bbeff;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;

  text-align: ${(props) => (props.side ? "unset" : "right")};
`;

export const FeatureItem = styled.li`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;

  color: #000000;
`;
