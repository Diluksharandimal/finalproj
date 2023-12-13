import Banner from "../../../shared/Banner1";
import PayImg from "../../../assets/unsplash.svg";
import './payments.css';


const Payments = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id="payment"  data-aos="zoom-out"
    data-aos-duration="3000" >
      {/*using the banner component and pass props */}
      
      <Banner banner={PayImg}  heading="Driving School"
      subheading={"A driving school is an essential institution for individuals looking to acquire the knowledge and skills needed for safe and responsible driving. These schools offer a structured curriculum that covers both theoretical and practical aspects of driving. In the classroom, students learn about traffic rules, road signs, and "} btn1={"Learn more.."}  />
    </div>
  );
};

export default Payments;
