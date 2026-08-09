import { TypeAnimation } from 'react-type-animation';

const About = () => {

    return (
        <div className="w-[90%] md:w-[46%] mt-[1rem] text-[#000000] font-semibold">

            <span className="text-5xl font-bold" id='about'>
                <span className='text-pink-500 inline-block' id='spin-flower'>✿</span>
                <span> hi, </span>
                <span> 
                    <TypeAnimation cursor={false} sequence={["i'm isidora"]}>
                    </TypeAnimation>
                </span>
            </span>

            <div className="mt-[1.5rem] text-lg">i'm a fourth-year student at the {" "}
                <a href="https://www.utoronto.ca/" 
                target='_blank'
                rel="noopener noreferrer"
                className='text-pink-500'>
                    university of toronto
                </a>, pursuing a double major in computer science and cognitive science
            </div>
        </div>
    )
}

export default About;
