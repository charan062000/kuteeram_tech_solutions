import React from "react";

const Founder = () => {
  return (
    <section className="m-10 border p-20">
      <div className="founderAndCo">
        <div className="border bg-slate-500 w-[500px] rounded-full  h-52 relative">
          <img
            src="/CoFounder.png"
            alt=""
            width={275}
            className="absolute bottom-0 rounded-bl-[100px]"
          />
          <div className="absolute right-16 top-12">
            <h1 className="font-poppins font-bold text-white text-3xl">
              J. Vinayak
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
