import { ArrowTurnDownLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    // console.log(error)
    return (
        <div className="error">
            <h1>Uh oh! We{`'`}ve got a problem</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn--dark" onClick={() => navigate(-1)}>
                    <ArrowTurnDownLeftIcon width={20}/>
                    <span>Go Back</span>
                </button>
                <Link to="/" className="btn btn--dark">
                    <HomeIcon width={20}/>
                    <span>Go Home</span>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;