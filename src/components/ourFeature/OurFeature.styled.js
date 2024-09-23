import styled from "styled-components";

export const ContainerOurFeature = styled.div`
  margin-bottom: 250px;
`;

export const OurFeatureBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  color: #ffffff;
`;
