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
                    <h5>(UTC-{getOffset('America/New_York')}) {currentTime}</h5>
                </div>
                <div className="flex gap-[1rem]">
                    <Link to="/"
                    className="hover:text-pink-500 transition-colors">
                        about
                    </Link>
                    <Link to="/experience"
                    className="hover:text-pink-500 transition-colors">
                        experience
                    </Link>
                    <Link to="/photos"
                    className="hover:text-pink-500 transition-colors">
                        photos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;