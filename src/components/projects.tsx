import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

const Projects = () => {

    const projects = [
        {   name: "Flashcard Maker",
            desc: "A full-stack flashcard application that enables users to \
            create, manage, browse, and study flashcards.",
            github: "https://github.com/isidora04/flashcard-app",
            view: "https://flashcard-app-lime-seven.vercel.app/login", 
            tech: "Node.js, Express.js, React, PostgreSQL"
        },
        {   name: "NBA Player Guessing Game",
            desc: "A browser-based game where you try to guess the NBA player \
            based on clues like team, height, position, and more. Inspired by games like Poeltl.",
            github: "https://github.com/isidora04/nba-guessing-game",
            view: "https://nba-guessing-game.vercel.app/play", 
            tech: "TypeScript, React"
        },
        {   name: "Loyalty Program",
            desc: "A full-stack, role-based web application for managing users, transactions, \
            events, and promotions, with support for point-based loyalty tracking and redemption.",
            github: "",
            view: "", 
            tech: "Node.js, Express.js, React, Prisma"
        },
        {   name: "Recipe Organizer",
            desc: "A recipe management app that allows users to search recipes by keyword, \
            build a personal meal plan, and automatically generate a shopping list based on selected ingredients.",
            github: "https://github.com/macy-chen/RecipeOrganizer",
            view: "", 
            tech: "Java, Swing"
        },
    ]

    return (
        <div className="w-[80%] md:w-[70%] mt-[2rem] text-slate-400 font-semibold">

            <div className="text-4xl bg-gradient-to-r from-slate-200 to-slate-300 inline-block text-transparent bg-clip-text mb-[1.5rem]" id="projects">Projects</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
                {projects.map((item, _index) => (
                    <div key={item.name} className="bg-white/10 p-[1rem] box-border rounded-xl hover:bg-white/15 transition-colors">
                        <div className="flex justify-between mb-[0.6rem] text-slate-200 text-lg">
                            {item.name}
                            <div className="flex gap-[5px]">
                                {item.github ? (<Link to={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-purple-400 transition-colors">
                                        <GitHubIcon></GitHubIcon>
                                    </Link>) 
                                : ""}
                                {item.view ? (<Link to={item.view}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-purple-400 transition-colors">
                                        <PublicIcon></PublicIcon>
                                    </Link>) 
                                : ""}
                            </div>
                        </div>
                        <div className="mb-[0.6rem] font-light text-sm text-purple-300">{item.tech}</div>
                        <div className="font-medium">{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects;