import Image from "next/image";
import React from "react";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/bg-port.mp4" type="video/mp4" />
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image
          src="/assets/logo-2.png"
          width={128 / 3}
          height={128 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Harshil Chudasama</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Node Developer.</span>
        </h2>
      </div>
      <div className="">
        <Image
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

export default Masthead;
