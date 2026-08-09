import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

    return (
        <div className="w-[90%] md:w-[46%] mt-[2rem] text-black font-semibold mb-[1rem]">
            <div className="text-xl font-bold mb-[1rem] mt-[2rem]" id="contact">contact</div>
            <div className='flex justify-between'>
                <a  className="text-md hover:text-pink-500 transition-colors w-max max-w-max"
                    id="email" 
                    href="mailto:isidoranedic1@gmail.com">
                    <div className='flex gap-[0.7rem] items-center w-max max-w-max'>
                        <span className='text-pink-500'><EmailIcon></EmailIcon></span>
                        <span className="underline underline-offset-2"> isidoranedic1@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;