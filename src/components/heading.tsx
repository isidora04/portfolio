import { TypeAnimation } from "react-type-animation";

const Heading = () => {

    return (            
    <span className="text-5xl font-bold w-[90%] md:w-[46%]" id='about'>
        <span className='text-pink-500 inline-block' id='spin-flower'>✿</span>
        <span> hi, </span>
        <span> 
            <TypeAnimation cursor={false} sequence={["i'm isidora"]}>
            </TypeAnimation>
        </span>
    </span>
    );
}

export default Heading;