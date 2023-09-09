import React from "react";
import fs from "../assets/Homepage 1.png"

const Home = () =>{
   return(
    <div className="home">
        <main>
            <h1>Safeguarding the Confidentiality of Sensitive 
                Healthcare Information</h1>
            <p>Ensures the patient records, billing Information ,
                and other sensitive data remain confidential
                and inaccessible to unauthorized parties.</p>
        </main>
        <main-bg>
            <img src={fs} alt="" />
        </main-bg>
    </div>
   )
}

export default Home;