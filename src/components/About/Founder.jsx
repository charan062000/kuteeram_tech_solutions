import React from "react";

const Founder = () => {
  return (
    <section className="m-10  p-20 flex gap-28 w-fit mx-auto flex-wrap justify-center items-center">
      <div className="flex flex-col justify-center items-center  w-fit gap-4 hover:scale-110 duration-300">
        <div className=" bg-indigo-300 w-56 rounded-full  h-56 relative ">
          <img
            src="/CoFunder.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[120px] rounded-br-[135px] -rotate-3"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-fit gap-4">
          <h1 className="text-4xl font-poppins font-bold text-slate-700  h-fit   ">
            Sanjay Prashad
          </h1>
          <p className="text-xl px-5 py-1 rounded-full bg-indigo-100 font-bold">
            Founder
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center  w-fit gap-4 hover:scale-110 duration-300">
        <div className=" bg-sky-300 w-56 rounded-full  h-56 relative ">
          <img
            src="/CoFounder.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[120px] rounded-br-[135px] -rotate-3"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center ">
          <h1 className="text-4xl font-poppins font-bold text-slate-700 h-fit   ">
            J. Vinayak
          </h1>
          <p className="text-xl px-5 py-1 rounded-full bg-sky-100 font-bold ">
            Co Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
