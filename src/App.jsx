import { Container } from "./components/common/styled";
import CompanyOverview from "./components/companyOverview/companyOverview";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import OurFeature from "./components/ourFeature/OurFeature";

export const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <CompanyOverview/>
      <OurFeature/>
      <Footer/>
    </Container>
  );
};

export default App;
