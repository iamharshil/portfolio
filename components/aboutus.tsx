import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
	return (
		<section className={"flex flex-col bg-white py-20 text-3xl md:text-4"}>
			<div className="container mx-auto px-11 text-center mt-28">
				<h2>About Me</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-20">
					<Member
						id="harshil"
						name="Harshil Chudasama"
						socialId="@iamharshil"
						link="https://github.com/iamharshil/"
					/>
				</div>
			</div>
			<div className="container mx-auto px-11">
				<p className="leading-tight max-w-2xl mx-auto text-lg mt-2 lg:text-2x; tracking-tight text-center indent-8">
				Hello, I am <strong>Harshil Chudasama</strong>, a passionate Next.js developer with a keen interest in backend engineering. I have a strong foundation in Typescript, Node and React, and I&apos;ve used these skills to build and maintain robust, scalable, and user-friendly web applications. I am now eager to delve deeper into the backend side of development to gain a holistic understanding of full-stack development. I am particularly interested in learning and implementing modern backend technologies and architectures.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
