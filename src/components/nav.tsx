import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    }));

    const getOffset = (timeZone = 'UTC', date = new Date()) => {
        const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
        return ((tzDate.getTime() - utcDate.getTime()) / 6e4 / 60).toString();
    }

    useEffect(() => {
        // update state every second
        const timerId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York"
            }));
        }, 1000);

        // clean up the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="w-[100%] md:w-[60%] flex justify-end items-center top-[1rem] p-[1rem] text-black font-semibold
        z-50">
            <div className="flex flex-col w-[100%] items-end gap-[1rem]">
                <div className="text-xs text-stone-500 font-normal">
                    <h5>(UTC{getOffset('America/New_York')}) {currentTime}</h5>
                </div>
                <div className="flex gap-[1rem]">
                    <a  className="hover:text-pink-500 transition-colors"
                        id="email" 
                        href="mailto:isidoranedic1@gmail.com">
                        contact
                    </a>
                    <Link to="https://www.github.com/isidora04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors">
                        github
                    </Link>
                    <Link to="https://www.linkedin.com/in/isidora-n-a9110b331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors">
                        linkedin
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;