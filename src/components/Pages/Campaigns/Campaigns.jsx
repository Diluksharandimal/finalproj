import campaignsImg from "../../../assets/campaigns.svg";
import campaignsImg1 from "../../../assets/campaigns1.svg";
import './campaigns.css'

const Campaigns = () => {

  const navi=[
    {path:"/profile"}
  ]

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12" id="campaigns">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2"  data-aos="fade-right">
            <img src={campaignsImg} alt=""/>
        </div>

        {/*Campaigns content */}
        <div className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal"  data-aos="fade-left">Driving schools typically have several  
            <span className="text-secondary"> key functions.</span></h2>
            <p className="text-tartiary text-lg mb-7" data-aos="zoom-in-right" >You can see here what the key functions are.</p>
      
     
            <button className="btnPrimary" data-aos="zoom-in-right"><a href="/profile">Get Started</a></button>
        </div>
      </div>

      <div className="h-12"></div>

      {/*second campaign */}
</div>
     
  );
}

export default Campaigns;
