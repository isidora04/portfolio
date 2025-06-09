import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

    return (
        <div className="w-[70%] mt-[2rem] text-slate-400 font-semibold">

            <div className="text-4xl text-slate-200 my-[1.5rem]" id="contact">Wanna get in touch?</div>

            <a  className="text-xl hover:text-purple-400 transition-color"
                id="email" 
                href="mailto:isidoranedic1@gmail.com">
                <EmailIcon></EmailIcon>{" "}
                <span className="underline">isidoranedic1@gmail.com</span>
            </a>

            <div className="flex gap-[0.5rem] my-[1rem] items-end">
                <Link to="https://www.github.com/isidora04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors text-5xl">
                    <GitHubIcon fontSize="inherit"></GitHubIcon>
                </Link>
                <Link to="https://www.linkedin.com/in/isidora-nedic-a9110b331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors text-5xl">
                    <LinkedInIcon fontSize="inherit"></LinkedInIcon>
                </Link>
            </div>
        </div>
    )
}

export default Contact;