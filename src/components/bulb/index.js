import { useState } from 'react';
import './index.css';
import on from "../../img/on.png"
import off from "../../img/off.png"


function Bulb() {
    const [lightBulb,setBulb] = useState(false)

    const changeSwitch =()=>{

        setBulb(!lightBulb)
    }

    return (
        <div className='bulb-parent'>
        <h4>Example for useState in React 💡 </h4>

        <img  width="500px" height="500px" src={lightBulb ? on : off} ></img>
        <label class="switch">
  <input type="checkbox" onClick={changeSwitch}/>
  <span class="slider round"></span>
</label>
     </div>
    )
}

export default Bulb;