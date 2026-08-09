import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

const Projects = () => {

    const projects = [
        {   name: "flashcard web app",
            github: "https://github.com/isidora04/flashcard-app",
            view: "", 
            tech: "node.js, express.js, react, postgresql"
        },
        {   name: "nba player guessing game",
            github: "https://github.com/isidora04/nba-guessing-game",
            view: "https://nba-guessing-game.netlify.app/play", 
            tech: "typescript, react"
        },
        {   name: "loyalty system",
            github: "https://github.com/isidora04/loyalty-program",
            view: "", 
            tech: "node.js, express.js, react, prisma, sqlite"
        },
        {   name: "recipe organizer",
            github: "https://github.com/macy-chen/RecipeOrganizer",
            view: "", 
            tech: "java, swing, junit"
        },
    ]

    return (
        <div className="w-[90%] md:w-[46%] mt-[2rem] text-black font-semibold">

            <div className="text-xl font-bold mb-[1.5rem] mt-[2rem]" id="projects">projects</div>

            <div className="grid grid-cols-1 gap-[1rem]">
                {projects.map((item, _index) => (
                    <div key={item.name} className="hover:bg-white/15 transition-colors">
                        <div className="flex sm:justify-between sm:flex-row flex-col mb-[0.6rem] text-md">
                            {item.name}
                            <div className="flex gap-[5px] text-stone-500 sm:text-end">
                                {item.tech}
                            </div>
                        </div>
                        <div className="mb-[0.6rem] mt-[-0.7rem] text-stone-700">
                            {item.github ? (<Link to={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-500 hover:underline transition-colors">
                                        github
                                    </Link>) 
                                : ""}
                            {item.view ? (<span> • </span>) : ""}
                            {item.view ? (<Link to={item.view}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 hover:underline transition-colors">
                                    site
                                </Link>) 
                            : ""}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects;