import Banner from "../../../shared/Banner";
import PayImg from "../../../assets/team.svg"


const BcardD = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id="bottom">
      {/*using the banner component and pass props */}
      <Banner banner={PayImg} heading=" In here you can do your work easily and enjoly."
      subheading={"You can view new applicant, New driving schools, Send e-mails, Create virtual license ands etc..."}  />
    </div>
  );
};

export default BcardD;