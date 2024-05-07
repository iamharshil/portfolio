import React from "react";
import s from "../styles/skills.module.css";

const Skills: React.FC = () => {
	return (
		<div className="bg-black text-white">
			<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
				<div className="leading-[1.15]">
					<div>Skills</div>
					<span className={s.skillText}>
						One of my notable projects is a command-line interface (CLI) tool
						for Express.js. This tool is designed to streamline the process of
						starting a new Express.js project by generating boilerplate code.
						It's capable of creating code in two popular languages: JavaScript
						and TypeScript, catering to different developer preferences.
					</span>
					<span className={s.skillText}>
						In addition to the basic Express.js setup, the tool also includes a
						database connection setup. This feature simplifies the process of
						integrating a database into your Express.js application, saving you
						from the tedious task of writing the setup code manually.
					</span>
					<span className={s.skillText}>
						This CLI tool is not just a personal project, but a contribution to
						the open-source community. It's available for download on npmjs.com,
						the default package manager for the Node.js JavaScript runtime. This
						means that any developer can install and use this tool to kickstart
						their Express.js projects.
					</span>
					<span className={s.skillText}>
						I'm continuously working on improving this tool by adding new
						features and fixing bugs, demonstrating my commitment to creating
						useful and reliable software tools.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;
