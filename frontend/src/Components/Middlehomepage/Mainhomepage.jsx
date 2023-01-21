import Accessories from "./Accessories";
import Bottomicon from "./BottomIcon";
import Camera from "./Camera";
import Eightpart from "./Eightpart";
import Fifthpart from "./Fifthpart";
import Firstpart from "./Firstpart";
import Fourthpart from "./Fourthpart";
import Homeappliance from "./Homeappliance";
import NinthpartTv from "./NinthpartTv";
import Personalcare from "./Personalcare";
import Secondpart from "./Secondpart";
import Sevenpart from "./Sevenpart";
import Sixthpart from "./Sixthpart";
import SmartPhone from "./SmartPhone";
import Smartwatch from "./SmartWatch";
import SpecialDay from "./SpecialDay";
import Washing from "./WashingMachine";


function Mainhomepage(){
    return(
<div>
<Firstpart/>
<Secondpart/>
<Smartwatch/>
<Fourthpart/>
<Fifthpart/>
<Sixthpart/>
<Sevenpart/>
<Eightpart/>
<NinthpartTv/>
<SpecialDay/>
<SmartPhone/>
<Homeappliance/>
<Washing/>
<Camera/>
<Personalcare/>
<Accessories/>
<Bottomicon/>
</div>
    )
}

export default  Mainhomepage;