import banner from '../../../assets/undraw.svg'
import Banner from '../../../shared/Banner';
import './main.css';


const Main = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 "   id="home" >
      <Banner banner={banner} heading="The Motor-Traffic Department" subheading="The Motor Traffic Department is a government agency responsible for regulating and overseeing various aspects of motor vehicles and road safety within a specific region or country.
       Its primary functions encompass vehicle registration, driver licensing, vehicle inspections, road safety enforcement, collection of fees and taxes, vehicle ownership transfers, and maintaining records related to vehicles and drivers.
              " btn1={'Learn more..'} />
    </div>
  );
};

export default Main;
 