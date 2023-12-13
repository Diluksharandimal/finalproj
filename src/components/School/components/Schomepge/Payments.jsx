import Banner from "../../../../shared/shared/Banner";
import PayImg from "../../assets/payments.svg"




const Payments = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id="payments" >
      {/*using the banner component and pass props */}
      <Banner banner={PayImg} heading="You can display your school prices to students and handle payments."
      subheading={"As a licensed driving school you can display your school prices to students and handle Customer's, MTD and Driving school payments."} btn1={"Manage"} btn2={"Get Started"} />
    </div>
  );
};

export default Payments;
