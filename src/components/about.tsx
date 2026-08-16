import { Link } from "react-router-dom";

const About = () => {

    return (
        <div className="w-[90%] md:w-[46%] mt-[1rem] text-[#000000] font-semibold">

            <div className="mt-[1.5rem] text-lg">i'm a fourth-year student at the {" "}
                <a href="https://www.utoronto.ca/" 
                target='_blank'
                rel="noopener noreferrer"
                className='text-pink-500'>
                    university of toronto
                </a>, pursuing a double major in computer science and cognitive science
            </div>
            <div className="mt-[2rem] text-lg flex justify-center gap-[3.5rem]">
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
    )
}

export default About;
