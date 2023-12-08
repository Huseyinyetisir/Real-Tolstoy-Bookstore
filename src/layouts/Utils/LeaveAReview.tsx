import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const LeaveAReview: React.FC<{}> = (_props) => {
    const [selectedStar, setSelectedStar] = useState<number | null>(0);
    const [reviewDescription, setReviewDescription] = useState('');


    return (
        <div>
            <h5>Leave a review?</h5>
            <Rating
                name="review-rating"
                value={selectedStar}
                precision={0.5}
                icon={<StarIcon style={{ fontSize: "32px", color: "gold", transition: "color 0.3s" }} />}
                onChange={
                    (event, newValue) => {setSelectedStar(newValue);
                    }}
                size="large"
                sx={{
                    '&:hover': {
                        transform: 'scale(1) !important',
                    },
                    '&:active': {
                        transform: 'scale(1) !important',
                    },
                }}
            />
            {selectedStar && 
                <form method="POST" action= '#'>
                    <hr />
                    <div className="mb-3">
                        <label className="form-label">
                            Description
                        </label>
                        <textarea className= "form-control" id="submitReviewDescription" placeholder="Optional"
                            rows={3} onChange={e => setReviewDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-3">Submit Review</button>
                    </div>

                </form>
            }
        </div>
    );
};

export default LeaveAReview;
