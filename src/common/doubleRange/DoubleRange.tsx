import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

 export const DoubleRange = () => {
     const [value, setValue] = useState([60, 80]);
     return (
         <div>
             <Nouislider range={{ min: 0, max: 100 }} start={value} connect  onChange={(value) => setValue(value)} step={1}/>
             <div>min {value[0]}</div>
             <div>max {value[1]}</div>
         </div>
     );
 }

