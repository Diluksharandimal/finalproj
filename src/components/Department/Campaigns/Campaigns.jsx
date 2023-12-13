
import campaignsImg1 from "../../../assets/campaigns1.svg"

const CampaignsD = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12">
      
      <div className="h-12"></div>

      {/*second campaign */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/3" data-aos="fade-down-right">
            <img src={campaignsImg1} alt=""/>
        </div>

        {/*Campaigns content */}
        <div className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal" data-aos="fade-down-right">Mottor Traffic Department
             <span className="text-secondary">(Sri Lanka.)</span></h2>
            <p className="text-tartiary text-lg mb-7" data-aos="fade-down-right">This is the 83rd performance report of the Department of the Motor Traffic which was established on the 1st January 1928.
            no person shall drive a light vehicle on a road unless he has completed the age of eighteen years and shall not drive a heavy vehicle on a road unless he has completed the age of twenty-one years.”. Amendment of section 123 of Chapter 203. Insertion of new section 141A in the principal enactment.</p>
            <button className="btnPrimary" data-aos="fade-down-right">Get Started</button>
        </div>
      </div>

    </div>
  );
};

export default CampaignsD;