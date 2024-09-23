import { ContainerHero, HeroText, ImgBlock, ImgHeroItemFirst, ImgHeroItemSecond, ImgHeroItemThird, MainHeroText } from "./Hero.styled";
import arr1 from "../../images/arrow_1.png"
import arr2 from "../../images/arrow_2.png"
import arr3 from "../../images/arrow3.png"

export const Hero = () => {
  return (
    <ContainerHero>
      <MainHeroText>Gaming software Ltd</MainHeroText>
      <HeroText>Flexibility, Opportunity, Speed.</HeroText>
      <ImgBlock>
        <ImgHeroItemFirst src={arr1}/>
        <ImgHeroItemSecond src={arr2}/>
        <ImgHeroItemThird src={arr3}/>
      </ImgBlock>
    </ContainerHero>
  );
};

export default Hero;
