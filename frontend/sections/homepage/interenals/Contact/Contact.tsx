import React from 'react';

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] px-3 py-[139px] xl:px-[100px] md:px-10">
      <h1 className="font-poppins text-center text-[55px] text-uptickBlack font-semibold">
        Contact us
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 my-[100px]">
        <div className="w-full max-w-[449px] flex flex-col gap-6">
          <h1 className="font-poppins text-uptickBlack text-[26px] md:text-[39px] font-semibold w-[210px]">
            Let us Connect
          </h1>
          <p className="font-poppins text-uptickBlack text-[18px]">
            Have questions or need assistance? We&apos;re here to help. Reach
            out to us via email or our contact form.
          </p>
          <button className="w-[197px] h-[72px] flex justify-center items-center py-[15px] px-[6px] rounded-md bg-[#1E1E1E] text-[#fff] font-poppins font-semibold">
            Contact us
          </button>
        </div>
        <form className="flex flex-col justify-center gap-[38px] w-full max-w-[487px] h-[583px]">
          <input
            type="text"
            placeholder="First Name"
            className="w-full py-[18px] px-[26px] rounded-[28px]  bg-[#E7E7E7]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full py-[18px] px-[26px] rounded-[28px]  bg-[#E7E7E7]"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full py-[18px] px-[26px] rounded-[28px]  bg-[#E7E7E7]"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={30}
            placeholder="Message"
            className="w-full py-[18px] px-[26px] rounded-[28px]  bg-[#E7E7E7]"
          ></textarea>
          <button className="w-full  py-[18px] px-[46px] rounded-[28px] flex justify-center items-center bg-[#1E1E1E] text-[#fff] font-poppins font-bold text-[18px]">
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
};
