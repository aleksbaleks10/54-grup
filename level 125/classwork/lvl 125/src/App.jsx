// საკლასო დავალება:

// კომპონენტში ჩაამატეთ მდგომარეობა, სადაც თავიდან 0-ს შეინახავთ და როდესაც ღილაკს დააკლიკებს მომხმარებელი, ეს მდგომარეობა ერთით გაზარდეთ.

// როდესაც კომპონენტის re-render მოხდება, alert-ში გამოიტანეთ მდგომარეობის მნიშვნელობა.
import {useState} from "react"
import {useEffect} from "react"
    function countcomp(){
      const[Count,setCount] = useState(0)
      useEffect(()=>{
        alert({Count})
      })
    return(
    <button onClick={()=>setCount(Count +1)}>+1</button>
    )
    }
    export default countcomp;