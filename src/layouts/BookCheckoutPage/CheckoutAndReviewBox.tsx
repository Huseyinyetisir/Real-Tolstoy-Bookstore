import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean }> = (props) => {

    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card-col-3 container d-felx mt-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    <p>
                        <b>0.5</b>
                        books checked out
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable ?
                        <h4 className="text-success">
                            Available
                        </h4>
                        :
                        <h4 className="text-danger">
                            Wait List
                        </h4>
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies}</b>
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copies}</b>
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copiesAvailable}</b>
                            available
                        </p>
                    </div>
                </div>
                    
                <Link to='/#' c />
            </div>

        </div>

    );

} 