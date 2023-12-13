import { useState } from 'react';
import './selectds.css';

import Head from '../../Navbar1/Head';

const Selectds=()=>{ 

  const reg=[ 
    {path:"/slectreg"}
  ]
  
    const [selectedValue, setSelectedValue ]= useState(''); 
    const handleDropdownChange = (event) => {setSelectedValue(event.target.value);};
    return(
      <><Head/>
      
        <div class="rgiregiall">
        <div class="r2wrapper">
        
        <div class="r2title">Select Driving School
        </div>
        <form action="POST" data-netlify="true">
          <div class="r2form">
    
    
            <div class="r2inputfield">
              <label class="r2lbl">Select Here</label>
              <div class="custom_select">
                <select id="state" name="state" value={selectedValue} onChange={handleDropdownChange} required>
                  <option value="">--Select your District--</option>
                  <option value="dis">Galle</option>
                  <option value="dis1">Mathara</option>
                  
                
                </select>
              </div>
            </div>
    
           </div>
        </form>
      </div>
      <div>
         {selectedValue === 'dis' && (<div className='select1'>
          <a href='https://www.google.com/localservices/prolist?g2lbs=ANTchaP5HYVfM3EbELGyaEfxAsgcR-Ry2-Wuh1VqxHcPMYAFBteYDhBtaQJy_BSRiWdX_apRkKxfLlFaK5mTrjw0rPMmqS9cHuypoqGpYBqXI6Jbmn9fjn0c76l7j6W1312vaga7bqHz&hl=en-LK&gl=lk&cs=1&ssta=1&q=galle%20area%20driving%20school&oq=galle%20area%20driving%20school&src=2&spp=Cg0vZy8xMWJ3M2RkemMxOrwBV2lFUUFSQUNFQU1pR1dkaGJHeGxJR0Z5WldFZ1pISnBkbWx1WnlCelkyaHZiMnlxQVdVS0NDOXRMekEyZW1ScUVBRXFGeUlUWVhKbFlTQmtjbWwyYVc1bklITmphRzl2YkNnQU1oOFFBU0lia0FxOElMTU4zTEFwYTZNS1JGVDdsaVB6TTJfY0VWVzh0UWJTTWgwUUFpSVpaMkZzYkdVZ1lYSmxZU0JrY21sMmFXNW5JSE5qYUc5dmJBPT0%3D&serdesk=1&lrlstt=1699531528729&ved=2ahUKEwigwYialbOCAxWLfGwGHW0iBp0QvS56BAgQEAE&slp=MgBAAVIECAIgAGAAaAE%3D&scp=ChNnY2lkOmRyaXZpbmdfc2Nob29sEiAiCG1hcCBhcmVhKhQNlL6QAxVYD8svHUveoAMl1vTVLxoTYXJlYSBkcml2aW5nIHNjaG9vbCoORHJpdmluZyBzY2hvb2w%3D'><h2><ul><li><b>තරංගා රියදුරු පුහුණු පාසල</b></li></ul></h2> <button className=' mt-10 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>SEE MORE</button> </a><a href='/slectreg'> <button className=' ml-96 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>REGISTER</button></a> </div>)}
         {selectedValue === 'dis' && (<div className='select2'><ul><li><b>Sri wijaya driving school   </b></li></ul> <button className=' mt-10 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>SEE MORE</button>    <a href='/slectreg'> <button className=' ml-96 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>REGISTER</button></a></div>)}
         {selectedValue === 'dis1' && (<div className='select3'>
          <a href='https://www.google.com/localservices/prolist?g2lbs=ANTchaOLXTz3p2rw6BpyTcNJKUraWEw6NLFLVuGNvCKBIvvwTUPtg65Py6t6hdSMtbOWdhPGyx7W9U7vDNqqls1VdRoIXn-DygMyRuG641NY7FXramxcdUkgSAKtJxysjIZFAfzHXv7D&hl=si-LK&gl=lk&cs=1&ssta=1&q=galle%20are%20driving%20school&oq=galle%20are%20driving%20school&slp=MgA6HENoTUlpYjd5eElIbWdnTVZPNkptQWgzSGx3dTFSAggCYAB6ggJDaGhuWVd4c1pTQmhjbVVnWkhKcGRtbHVaeUJ6WTJodmIyeEl0NlQ3LW95cmdJQUlXaWdRQWhBREdBQVlBaGdESWhobllXeHNaU0JoY21VZ1pISnBkbWx1WnlCelkyaHZiMnd5QW1WdWtnRU9aSEpwZG1sdVoxOXpZMmh2YjJ5cUFWOEtDQzl0THpBMmVtUnFFQUVxRWlJT1pISnBkbWx1WnlCelkyaHZiMndvQURJZkVBRWlHNUFEV0UybW95SW5QX2REM3p3LVZWNzVSdnVXa01mSXF2WDhwakljRUFJaUdHZGhiR3hsSUdGeVpTQmtjbWwyYVc1bklITmphRzl2YkGSAbABCg0vZy8xMWZzX2xkMHM4Cg0vZy8xMWMzN3B5bmtyCg0vZy8xMWJ3M2RkemMxCgwvZy8xaGhreGxoaGgKDS9nLzExZ201Y19fc3EKDS9nLzExaHZjNGxudnQKDS9nLzExdGhoYjM0YzgKDS9nLzExdDZ5eDI1c3gKDS9nLzExaDBocDJ0bGsKDS9nLzExcV9ieF92azcKDS9nLzExcXNnZHY5NGoSBBICCAESBAoCCAE%3D&src=2&spp=CgwvZy8xaGhreGxoaGg6sAFXaDRRQWhBREloaG5ZV3hzWlNCaGNtVWdaSEpwZG1sdVp5QnpZMmh2YjJ5cUFWOEtDQzl0THpBMmVtUnFFQUVxRWlJT1pISnBkbWx1WnlCelkyaHZiMndvVHpJZkVBRWlHNUFEV0UybW95SW5QX2REM3p3LVZWNzVSdnVXa01mSXF2WDhwakljRUFJaUdHZGhiR3hsSUdGeVpTQmtjbWwyYVc1bklITmphRzl2YkE9PQ%3D%3D&serdesk=1&lrlstt=1701151069428&ved=2ahUKEwj35OzEgeaCAxWRSmwGHXY_Bp4QvS56BAgQEAE&scp=ChNnY2lkOmRyaXZpbmdfc2Nob29sEj0SEgnj_DJpu3PhOhEDTMb5A7k1SiIP4Lac4LeP4La94LeK4La9KhQN0yKXAxXHS8kvHbT5oAMlfnbVLzAAGg5kcml2aW5nIHNjaG9vbCIYZ2FsbGUgYXJlIGRyaXZpbmcgc2Nob29sKhngtrDgt4_gt4DgtrEg4La04LeP4LeD4La9'><h2><ul><li><b>දොමෙනිකා රියදුරු පාසල</b></li></ul></h2> <button className=' mt-10 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>SEE MORE</button> </a><a href='/slectreg'> <button className=' ml-96 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>REGISTER</button></a> </div>)}
         {selectedValue === 'dis1' && (<div className='select4'><ul><li><b> Jayaruk Driving School   </b></li></ul> <button className=' mt-10 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>SEE MORE</button>    <a href='/slectreg'> <button className=' ml-96 box-border border-8 rounded-lg border-cyan-900  pr-5 pl-5'>REGISTER</button></a></div>)}
         
       
      </div>
      
          </div>
        

      </>
    )
}
export default Selectds;