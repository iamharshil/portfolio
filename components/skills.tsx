import React from "react";
import s from "../styles/skills.module.css";

const Skills: React.FC = () => {
	return (
		<div className="bg-black text-white">
			<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
				<div className="leading-[1.15]">
					<div>Skills</div>
					<span>
						I have created Express.js CLI tool to get boilerplate Express.JS
						code with Javascript or Typescript including database connection and
						it is available on npmjs.com
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;
