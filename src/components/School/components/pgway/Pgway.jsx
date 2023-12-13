import React from 'react'
import payway from '../../assets/pway.png'
import './Payway.css'


//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';

const Pgway = () => {
  return (
    <motion.div
    
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
    
    >

      
      <div class="container">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="Matara"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="Sri Lanka"/>
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src={payway} alt=""/>
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout and register" class="submit-btn"/>

    </form>
    </div>
    </motion.div>
  )
}

export default Pgway
