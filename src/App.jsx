
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Campaigns from './components/Pages/Campaigns/Campaigns';

import SignUpForm from './components/Pages/Signup/SignUpForm';
import Reg from './components/Pages/Registerdetails/Reg';
import ExamD from './components/Pages/ExamsD/ExamD';
 

import Home from './components/Pages/Home/Home';
import HomePage from './HomePage/HomeP/HomeP';
import Selectds from './components/Pages/Selectds/selectds';
import Navigate from './components/Department/HomeD/HomeD';
import Sigform from './components/Department/LoginD/LoginD';

import ExamsD from './components/Pages/ExamsD/ExamD';
import Fogpsw from './components/Pages/Signup/forgotpsw';
import Resetpsw from './components/Pages/Signup/fogpswd2';
import Navigatescl from './components/School/components/Schomepge/main2';
import Applhome from './components/School/components/Applipge/Applhome';
import Frmproffile from './components/School/components/frmproffile/Frmproffile';
import Exhome from './components/School/components/Exampage/Exhome';
import Schedhome from './components/School/components/Schedpage/Schedhome';
import Camp from './components/School/components/Campaignpage/Camp';
import Payhome from './components/School/components/Paymentpage/Payhome';
import Payall from './components/School/components/payallpage/Payall';
import { Emailpro } from './components/School/components/email/emailpro';
import Conhome from './components/School/components/conexpge/Conhome';
import Exregister from './components/School/components/ExRegist/Exregister';
import Campall from './components/School/components/campallpage/Campall';
import SignUpFormscl from './components/School/components/Signupage/SignUpFormscl';
import Proffview from './components/School/components/frmproffile/proflie';
import Admin from './components/Department/Admin/Admin';
import Profscl from './components/School/components/frmproffile/profilescle';
import Selectdrivingform from './components/Pages/Selectds/selectDriving/selectdriving';
import Department from './components/Pages/Selectd/selectd';
import Sign2 from './components/Pages/Signup/sign2';
import Admin2 from './components/Department/Admin/Admin2';
import ViewE from './components/Pages/ViewElicense/View';
import DepAdmin from './components/Department/Admin/DepAdmin';
import Loginfrm from './Examinors/examsign';
import Form1 from './components/Pages/Selectd/selct';
import Accept from './components/Department/Admin/accept';
import Examinor from './Examinors/examinor';
import SclLoginfrm from './components/School/components/Signupage/SignUpFormscl';
import Applicant from './Applicant/newapplicant';
import DrivingSchoolInterface from './Applicant/newapplicant';





function App() {
 
  const [token,setToken] = useState (true)

  if (token){
    sessionStorage.setItem('token',token,JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  })
 
  return (
    <> 
     <BrowserRouter>
       <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<Campaigns/>}/>
            <Route path="/signin" element={""}/>
            <Route path="/signup" element={<Sign2 />}/>
            <Route path="/cus" element={<Home/>}/>
            <Route path="/reg" element={<Admin2/>}/>
            <Route path="/exam" element={<ExamsD/>}/>
            {/* <Route path="/select" element={<Dropdown/>}/> */}
            <Route path="/ds" element={<Selectds/>}/>
            <Route path="/LoginD" element={<Sigform setToken={setToken}/>}/>
            {token?<Route path="/department" element={<Navigate/>}/>:""}
            <Route path="/fogpsw" element={<Fogpsw/>}/>
            <Route path="/restpsw" element={<Resetpsw/>}/>
            <Route path="/school" element={<SclLoginfrm/>}/>
            <Route path="/sclregform" element={<Frmproffile/>}/>
            <Route path="/exm" element={<Exhome/>}/>
            <Route path="/appli" element={<Applhome/>}/>
            <Route path="/schedule" element={<Schedhome/>}/>
            <Route path="/camp" element={<Camp/>}/>
            <Route path="/pay" element={<Payhome/>}/>
            <Route path="/payll" element={<Payall/>}/>
            <Route path="/conx" element={<Conhome/>}/>
            <Route path="/exreg" element={<Exregister/>}/>
            <Route path="/campss" element={<Campall/>}/>
            <Route path="/profile" element={<Proffview/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/scl" element={<Navigatescl/>}/>
            <Route path="/sclprofile" element={<Profscl/>}/>
            <Route path="/slectreg" element={<Selectdrivingform/>}/>
            <Route path="/select" element={<Department/>}/>
            <Route path="/sign2" element={<Sign2/>}/>
            <Route path="/viewE" element={<ViewE/>}/>
            <Route path="/addexamin" element={<DepAdmin/>}/>
            <Route path="/examinlog" element={<Loginfrm/>}/>
            <Route path="/sel" element={<Form1/>}/>
            <Route path="/accept" element={<Accept/>}/>
            <Route path="/examinor" element={<Examinor/>}/>
            <Route path="/applicant" element={<DrivingSchoolInterface/>}/>


       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
