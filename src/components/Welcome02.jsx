import Btn from "./Btn";
const Welcome02 = () => {
  return (
    <div className="relative h-screen">
      <img
        src="../src/assets/Logo.svg"
        alt="logo"
        className="absolute top-4 ml-9 max-w-36"
      />
      <div className="flex sm:top-1/2 sm:relative sm:-translate-y-1/2  justify-evenly flex-wrap items-center ">
        <img src="../src/assets/05.png" alt="04" className="sm:hidden md:w-96 xl:w-fit" />

        <div className="max-w-[400px] relative">
          <img
            src="../src/assets/border.png"
            alt=""
            className=" absolute max-w-[400px]"
          />
          <img src="../src/assets/bggray.png" alt="" className="w-fit  " />

          <div className=" absolute top-20 left-1/2 -translate-x-1/2 w-[70%] space-y-24  flex flex-col justify-center items-center">
            <div className=" flex justify-between items-center space-x-3">
              <span className="miniTap"></span>
              <span className="selectTap miniTap"></span>
              <span className="miniTap"></span>
            </div>
            <div>
              <h1 className="text-[#1a1a1a] flex text-center flex-wrap gap-3  pb-4 justify-center text-2xl font-semibold ">
                Manage Your 
                <span className="flex flex-col justify-start  items-start w-fit ">
                Time
                  <img
                    className="inline w-full"
                    src="../src/assets/Vector 2.png"
                    alt=""
                  />
                </span>
              </h1>
              <p
                className="text-[#4D4D4D] mx-auto text-center
         font-normal text-[18px] leading-5 w-full"
              >
             Manage Your Time By Creating  a Clear Plan For You              </p>
            </div>
            <Btn>Continue</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome02;
