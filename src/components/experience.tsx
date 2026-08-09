const Experience = () => {

    const experience = [
        {   company: "MongoDB",
            title: "software engineer intern",
            date: "jun - aug 2026",
        },
        {   company: "Royal Bank of Canada",
            title: "software developer intern",
            date: "sept 2025 - apr 2026",
        },
    ]

    return (
        <div className="w-[90%] md:w-[46%] mt-[2rem] text-black font-semibold">

            <div className="text-xl font-bold mb-[1.5rem] mt-[2rem]" id="experience">experience</div>

            <div className="grid grid-cols-1 gap-[1rem]">
                {experience.map((item, _index) => (
                    <div key={item.company} className="hover:bg-white/15 transition-colors flex justify-between">
                        <div className="flex justify-between flex-col mb-[0.6rem]">
                            <span>{item.company}</span>
                            <span>{item.title}</span>
                        </div>
                        <div className="mb-[0.6rem] text-stone-500 text-end">{item.date}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Experience;