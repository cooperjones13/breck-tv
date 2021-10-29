import './clock.css'
import moment from "moment";
import { useState , useEffect} from "react";
function Clock(){

    const [time, setTime] = useState(moment().format('LT'))


    useEffect(() =>{ 
        setInterval(
            () => {setTime(moment().format('LT'))}, 5000)
        }
    );

    return(
        <div className="Clock">
            <span className="time">
                {time}
            </span>
        </div>
    );
}

export default Clock;