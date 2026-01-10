import {HeaderSection} from '../components/HeaderSection';
import Footer from '../components/Footer';

export const MainLayout = ({children}) => {
  
    return (
        <>
       
          <HeaderSection />
          <main>{children}</main>
          <Footer />
        </>
    );
};