import {
  ContainerCompanyOverview,
  ImgItem,
  InformationItemBlock,
  MainInfoText,
  SymbolItem,
  Text,
  TextBlock,
  TextInformation,
  TextInformationItem,
  TextItem,
  TextSpan,
} from "./companyOverview.styled";
import vector from "../../images/Vector.png"

export const CompanyOverview = () => {
  return (
    <ContainerCompanyOverview>
      <InformationItemBlock>
        <TextInformationItem>Who We Are?</TextInformationItem>
        <SymbolItem>?</SymbolItem>
        <ImgItem src={vector}/>
      </InformationItemBlock>
      <InformationItemBlock>
        <TextInformation>
          We are <TextSpan>GAMING SOFTWARE</TextSpan> a fast growing UK gambling
          company. We are a regular participant in international events in
          Europe and America, our brands are respected and popular among
          customers. We offer a dynamic, innovative and friendly work
          environment in a stable and profitable company.
          <TextSpan> Connect to your story!</TextSpan>
          <TextBlock>
            <TextItem>
              <MainInfoText>500+</MainInfoText>
              <Text>
                More than 500 talented people engaged in a variety of areas of
                management of our services.
              </Text>
            </TextItem>
            <TextItem>
              <MainInfoText>10</MainInfoText>
              <Text>
                Major established B2C (gaming) brands. Which were released and
                remain relevant to this day
              </Text>
            </TextItem>
          </TextBlock>
        </TextInformation>
      </InformationItemBlock>
    </ContainerCompanyOverview>
  );
};

export default CompanyOverview;
