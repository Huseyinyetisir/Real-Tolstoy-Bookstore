import { useOktaAuth } from "@okta/okta-react"
import { useState } from "react";

export const PostNewMessage = () => {

    const { authState } = useOktaAuth();
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);
    
    return(
        <div className="card mt-3">
            {displaySuccess &&
                <div className="alert alert-success" role="alert">
                    Question added succesfully
                </div>
            }
            <div className="card-header">
                Ask question to Real Tolstoy Bookstore admin
            </div>
            <div>
                
            </div>
        </div>


    );
}