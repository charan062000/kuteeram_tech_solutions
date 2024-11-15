import React from "react";

const Experts = () => {
  return (
    <section className="  p-20 flex gap-28 w-fit mx-auto flex-wrap">
      <div className="founderAndCo flex flex-col justify-center items-center  w-fit gap-4">
        <div className=" bg-slate-300 w-44 rounded-full  h-44 relative ">
          <img
            src="/talha.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[120px] rounded-br-[120px] "
          />
        </div>
        <div className="flex flex-col justify-center items-center w-fit gap-4">
          <h1 className="text-4xl font-poppins font-bold text-slate-700  h-fit   ">
            Talha
          </h1>
          <p className="text-xl px-5 py-1 rounded-full bg-slate-200 font-bold text-center">
            Front end Developer / <br /> UI UX Design
          </p>
        </div>
      </div>

      <div className="founderAndCo flex flex-col justify-center items-center  w-fit gap-4">
        <div className=" bg-red-300 w-44 rounded-full  h-44 relative ">
          <img
            src="/sai.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[120px] rounded-br-[120px] "
          />
        </div>
        <div className="flex flex-col justify-center items-center w-fit gap-4">
          <h1 className="text-4xl font-poppins font-bold text-slate-700  h-fit   ">
            Sai Charan
          </h1>
          <p className="text-xl px-5 py-1 rounded-full bg-red-100 font-bold">
            Front end Developer
          </p>
        </div>
      </div>

      <div className="founderAndCo flex flex-col justify-center items-center  w-fit gap-4">
        <div className=" bg-indigo-200 w-44 rounded-full  h-44 relative ">
          <img
            src="/taha.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[120px] rounded-br-[120px] "
          />
        </div>
        <div className="flex flex-col justify-center items-center w-fit gap-4">
          <h1 className="text-4xl font-poppins font-bold text-slate-700  h-fit   ">
            George Tiller
          </h1>
          <p className="text-xl px-5 py-1 rounded-full bg-indigo-200 font-bold text-center">
            Digital Marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experts;
