import styled from "styled-components";

export const ContainerCompanyOverview = styled.div`
  border-top: 3px solid #747474;
  margin-bottom: 201px;
  display: flex;
`;

export const InformationItemBlock = styled.div`
  padding-top: 70px;
  position: relative;
`;

export const ImgItem = styled.img`
  position: absolute;
  top: 125px;
  left: -3px;
`;

export const SymbolItem = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;

  color: #000000;
  transform: rotate(45deg);

  position: absolute;
  top: 76px;
  left: 166px;
`;

export const TextInformationItem = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;

  margin-right: 77px;

  width: 225px;

  color: #000000;
`;

export const TextInformation = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;

  width: 980px;

  color: #000000;
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  padding-top: 80px;
`;

export const TextSpan = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 35px;

  color: #2bbeff;
`;

export const TextItem = styled.div`
  width: 350px;
  border-top: 3px solid #747474;
  padding-top: 15px;

  &:not(:last-child) {
    margin-right: 100px;
  }
`;

export const Text = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 35px;

  margin: 0;

  color: #000000;
`;

export const MainInfoText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 56px;

  margin: 0;
  padding: 10px 0;

  color: #2bbeff;
`;
