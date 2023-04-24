import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
	return (
		<section className={"flex flex-col bg-white py-20 text-3xl md:text-4"}>
			<div className="container mx-auto px-11 text-center mt-28">
				<h2>About Me</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-20">
					<Member
						id="marc"
						name="Harshil Chudasama"
						socialId="@iamharshil"
						link="https://github.com/iamharshil/"
					/>
				</div>
			</div>
			<div className="container mx-auto px-11">
				<p className="leading-tight max-w-2xl mx-auto text-2xl lg:text-2x; tracking-tight">
					Hey, I am <strong>Harshil Chudasama</strong> and I am non-tech guy who
					got interested into tech, as of growing state and how widely it is all
					around the world, I really wanna get into it. So, I started learning
					programming by myself. I started with Python and continued it.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
