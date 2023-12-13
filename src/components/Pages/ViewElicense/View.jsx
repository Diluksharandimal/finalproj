import React, { useEffect, useState } from 'react';
import './ViewE.css';
import Elicense from "../../../assets/unkown.jpg"
import idlogo from "../../../assets/idlogo1.jpg"
import idcar from "./images/autoc.jpg" 
import tuk from "./images/tuk.jpg" 
import bike from "./images/bikeid.png" 
import file from "./images/file.jpg"
import { supabase } from '../../../client';

const ViewE = () => {

  const [users,setUsers]=useState([])
  const [user1, setUser1] = useState(null);

  const [user, setUser]=useState({
    Full_name:'',Address:''
  })

  const [user2, setUser2]=useState({
    NIC:'' ,Full_name:'',Address:''
  })

  console.log(user2)

  useEffect(() => {
    fetchLiceners()
  }, [])

  async function fetchLiceners(){
    const {data} = await supabase
    .from('Customer')
    .select('*')
    setUsers(data)
  }

  function handleChange(event){
      setUser(prevFormData =>{
        return{
          ...prevFormData,
          [event.target.name]:event.target.value
        }
      })
  }
  

  function handleChange2(event){
    setUser2(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
}  

    
  async function createLiceners(){

    await supabase
    .from('Customer')
    .insert({Full_name: user.Full_name, L_name: user.L_name,Address:user.Address})
  }

  async function deleteLicenser(userId){

    const {data, error} = await supabase
    .from('Customer')
    .delete()
    .eq('NIC', userId)

    fetchLiceners()

    if(error){
      console.log(error)
    }
    if(data){
      console.log(data)
    }
  }

function displayLicenser(userId){
    users.map((user)=>{

      if(user.id==userId){
        setUser2({NIC:user.NIC,Full_name:user.Full_name,L_name:user.L_name,Address:user.Address})
      }
    })

  }

 async function updateLicenser(userId){
    const {data,error} = await supabase
    .from('Customer')
    .update({NIC:user2.NIC,Full_name:user2.Full_name,L_name:user2.L_name,Address: user2.Address})
    .eq('NIC', userId)

    fetchLiceners()

    if(error){
      console.log(error)
    }
    if(data){
      console.log(data)
    }
  }

  useEffect(() => {
    fetchStoredUser();
  }, []);

  function fetchStoredUser() {
    const storedUser = localStorage.getItem('loggedInUser');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    console.log('Stored User:', parsedUser);
    setUser1(parsedUser);
  }
  return (
    <div> 
    
      
   
    <div className='text-center' id='Elicense'>
      <div className='idlogo'>
    <img src={idlogo} alt="Srilanka"/>
     </div>
     
    
        <div id='idpic'>
            <img src={Elicense}></img>
        </div>

        <div key={user1?.Nic}>
        <div className='idinfo'>
        <p id='idtitle'>DRIVING LICENSE</p>
        <h1 id='idtitle12'>Name:{user1?.Name}</h1> 
        <h1>Address:{user1?.Address}</h1>
        <h1>Blood type: B+</h1>
        </div>
        </div>
        </div>
       
        <div className='text-center mb-32' id='Elicense1'>
        
        <div class="container mx-auto">
  <table class="min-w-full border border-gray-400">
    <thead>
      <tr>
        <th class="border border-gray-900">9</th>
        <th class="border border-gray-900">10</th>
        <th class="border border-gray-900">11</th>
        <th class="border border-gray-900">12</th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td class="border border-gray-900"><img src={idcar} width={40} height={10} alt='car'></img></td>
        <td class="border border-gray-900">20.10.2018</td>
        <td class="border border-gray-900">20.10.2024</td>
        <td class="border border-gray-900">XXXXXXXXX</td>
        
        
      </tr>
      
      <tr>
        <td class="border border-gray-900"><img src={tuk} width={40} height={10} alt='car'></img></td>
        <td class="border border-gray-900">20.10.2018</td>
        <td class="border border-gray-900">20.10.2024</td>
        <td class="border border-gray-900">XXXXXXXXX</td>
      </tr>
      
      <tr>
        <td class="border border-gray-900"><img src={bike} width={40} height={10} alt='car'></img></td>
        <td class="border border-gray-900">20.10.2018</td>
        <td class="border border-gray-900">20.10.2024</td>
        <td class="border border-gray-900">XXXXXXXXX</td>
      </tr>
      
    </tbody>
  </table>
</div>

         </div>
         <div className=' ml-96 mb-20' id='iddoc'>
          <img src={file} alt='doc' width={50} height={40}/>:<a className=' ml-12' id='iddocpara' href='#'><u>Here is Your QR</u></a>
         </div>
        </div>

  

       
  )
}

export default ViewE;