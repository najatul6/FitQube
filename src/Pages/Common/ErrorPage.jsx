// import img from "@/assets/Animation/NotFound.json"
import { Button } from "@/components/ui/button";
// import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import './ErrorPageStyle.css'

const ErrorPage = () => {
    // const error = useRouteError();
    // console.log(error.data);
    return (
        <div className="flex flex-col gap-6 justify-center items-center h-screen">
           <div class="contain">
                <div class="main">
                    <span class="e">E</span>
                    <span class="r">R</span>
                    <span class="r1">R</span>
                    <span class="o">O</span>
                    <span class="r2">R</span>
                </div>
                <div class="four">
                    <span class="first">4</span>
                    <span class="second">0</span>
                    <span class="third">4</span>
                </div>
            </div>

            <Link to="/">
                <Button className="cursor-pointer">Back to Home</Button>
            </Link>
        </div>
        
    );
};

export default ErrorPage;

