import {HeaderSection} from '../components/HeaderSection';
import Footer from '../components/Footer';

export const MainLayout = ({children}) => {
  
    return (
        <>
        <section
      id="section"
      className="min-h-screen bg-gradient-to-b px-3 sm:px-10
                 from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] pt-6"
    >
          <HeaderSection />
          <main>{children}</main></section>
          <Footer />
        </>
    );
};