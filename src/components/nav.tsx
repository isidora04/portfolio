import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Nav = () => {

    return (
        <div className="sticky w-[70%] flex justify-between items-center bg-white/10 backdrop-blur-md top-[1rem] p-[1rem]
        z-50 border rounded-xl border-slate-600">
            <div className="sm:flex gap-[1rem] hidden">
                <a href="#"
                    className="text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    Home
                </a>
                <a href="#about"
                    className="text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    About
                </a>
                <a href="#projects"
                    className="text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    Projects
                </a>
                <a href="#contact"
                    className="text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    Contact
                </a>
            </div>
            <div className="flex gap-[0.5rem]">
                <Link to="https://www.github.com/isidora04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors">
                    <GitHubIcon></GitHubIcon>
                </Link>
                <Link to="https://www.linkedin.com/in/isidora-nedic-a9110b331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors">
                    <LinkedInIcon></LinkedInIcon>
                </Link>
            </div>
        </div>
    )
}

export default Nav;