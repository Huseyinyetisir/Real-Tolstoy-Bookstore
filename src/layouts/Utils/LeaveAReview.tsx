import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{}> = (props) => {

    const [starInput, setStarInput] = useState(0);
    const [hoverValue, setHoverValue] = useState(0)


    function starValue(value: number) {
        setStarInput(value);
    }
    
    return (
        <div>
            <h5 >
                Leave a review?
            </h5> 
            <StarsReview rating={starInput} size={32} />
        </div>

    );
}