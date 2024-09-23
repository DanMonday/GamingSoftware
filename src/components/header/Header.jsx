import logo from '../../images/Logo.png'
import { ContainerHeader, LogoImg } from './Header.styled';


export const Header = () => {
  return (
    <ContainerHeader>
        <LogoImg src={logo} />
    </ContainerHeader>
  );
}

export default Header;