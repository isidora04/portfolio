import { TypeAnimation } from 'react-type-animation';

const About = () => {

    return (
        <div className="w-[70%] mt-[2rem] text-slate-400 font-semibold">

            <span className="text-5xl" id='about'>
                <span className="text-slate-400">Hi, </span>
                <span className="text-slate-200"> 
                    <TypeAnimation sequence={["I'm Isidora"]}>
                    </TypeAnimation>
                </span>
            </span>

            <div className="mt-[1.5rem] text-lg">I'm a third-year student at {" "}
                <a href="https://www.utoronto.ca/" 
                target='_blank'
                rel="noopener noreferrer"
                className='text-purple-400'>
                    UofT
                </a>, studying Computer Science and Cognitive Science. I'm passionate 
                about full-stack development and I enjoy making pretty websites.
            </div>
            <div className="mt-[1.5rem] text-lg">
                Here are some of the technologies I've been working with:
            </div>
            <ul className="grid grid-cols-1 list-disc list-inside mt-[0.5rem] md:grid-cols-2 marker:text-purple-400">
                <li>JavaScript/TypeScript</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>Express.js</li>
                <li>C</li>
            </ul>
        </div>
    )
}

export default About;