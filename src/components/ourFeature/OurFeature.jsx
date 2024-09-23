import {
  ContainerOurFeature,
  FeatureBlock,
  FeatureImg,
  FeatureItem,
  FeatureList,
  FeatureMainText,
  OurFeatureBlock,
  ShadowBlock,
} from "./OurFeature.styled";
import imgDia from "../../images/Diamond.png";
import imgLig from "../../images/Lightning.png";

export const OurFeature = () => {
  return (
    <ContainerOurFeature>
      <OurFeatureBlock>
        <FeatureBlock indent={true}>
          <FeatureMainText>Our feature</FeatureMainText>
          <FeatureList side={true}>
            <FeatureItem>
              - Rapid company growth that gives new opportunities for personal
              advancement.
            </FeatureItem>
            <FeatureItem>
              - Swift decision-making, changes and approvals (no bureaucracy or
              micromanagement).
            </FeatureItem>
            <FeatureItem>
              - We are highly flexible in building teams and projects.
            </FeatureItem>
          </FeatureList>
        </FeatureBlock>
        <FeatureImg src={imgDia} />
        <ShadowBlock side={true} />
      </OurFeatureBlock>
      <OurFeatureBlock>
        <FeatureImg src={imgLig} />
        <ShadowBlock side={false} />
        <FeatureBlock indent={false}>
          <FeatureList side={false}>
            <FeatureItem>
              - Open internal communication - it's easy to interact with all
              colleagues, and everyone is focused on achieving excellent
              results. No one hinders processes or drags them down.
            </FeatureItem>
            <FeatureItem>
              - We uphold values. While others have a vast explication of values
              without using them, ours are tangible in our work.
            </FeatureItem>
            <FeatureItem>
              - Employee voices are heard, and opinions matter. There is freedom
              in decision-making, and suggesting one's perspective on processes
              is welcomed. Testing almost any hypothesis is possible.
            </FeatureItem>
          </FeatureList>
        </FeatureBlock>
      </OurFeatureBlock>
    </ContainerOurFeature>
  );
};

export default OurFeature;
