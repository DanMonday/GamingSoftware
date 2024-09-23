import {
  ContainerFooter,
  FooterBlock,
  FooterEmailText,
  FooterImg,
  FooterText,
} from "./Footer.styled";
import img from "../../images/Logo.png";

export const Footer = () => {
  return (
    <ContainerFooter>
      <FooterBlock>
        <FooterText side={true}>GAMING SOFTWARE LTD</FooterText>
        <FooterText side={true}>London, UK</FooterText>
      </FooterBlock>
      <FooterBlock>
        <FooterImg src={img} />
      </FooterBlock>
      <FooterBlock>
        <FooterText>CONTACT INFO</FooterText>
        <FooterEmailText>
          E: tatiana.hr@progamingsoftware.com
        </FooterEmailText>
      </FooterBlock>
    </ContainerFooter>
  );
};

export default Footer;
