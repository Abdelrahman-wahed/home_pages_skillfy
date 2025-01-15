import Btn from "./Btn";
const Start = () => {
  return (
    <div className="relative h-screen">
      <img
        src="./src/assets/Logo.svg"
        alt="logo"
        className="absolute top-4 ml-9 max-w-36"
      />
      <img
        src="./src/assets/01.png"
        alt="01"
        className="sm:hidden absolute max-w-[600px] -top-7 left-1/2 -translate-x-1/2"
      />
      <img
        src="./src/assets/02.png"
        alt="02"
        className="sm:hidden  absolute max-w-[350px] left-0 top-1/2 -translate-y-1/2  "
      />
      <img
        src="./src/assets/03.png"
        alt="03"
        className="absolute max-w-[400px] right-1/2 bottom-0 translate-x-[-20%]  "
      />
      <img
        src="./src/assets/halfcyrcle.png"
        alt="halfcyrcle"
        className="sm:w-[200px]  absolute right-0 top-0 max-w-[300px]"
      />
      <div className=" sm:left-1/2 sm:w-[80%] sm:-translate-x-1/2 absolute max-w-[400px] right-20 top-1/2 -translate-y-1/2">
        <p className="font-semibold text-4xl pr-5 mb-20">
          <span className="block mb-7">Start !</span>To Start Your Nem Journey
          of Learning Everything New
        </p>
        <Btn>Get Start</Btn>
      </div>
    </div>
  );
};

export default Start;
