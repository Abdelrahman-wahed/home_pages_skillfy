import Btn from "./Btn";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Home = () => {
  const [isOpen,setIsOpen] = useState(false)
  function handleToggleLinks(){
      setIsOpen(!isOpen)
 
  }
  return (
    <div>
      {/* start header  */}
      <div className="relative flex justify-between items-center border-b-[1px] border-mainGray px-9 sm:px-4">
        <img src="./Logo.svg" alt="logo" className="sm:w-24" />
        <ul className=" sm:hidden   space-x-14 flex items-center text-base font-semibold text-[#808080] ">
          <li className=" active py-8 cursor-pointer   ">Home</li>
          <li className=" py-8 cursor-pointer hover:text-mainColor  ">
            My Courses
          </li>
          <li className="py-8 cursor-pointer hover:text-mainColor  ">Tracs</li>
          <li className="py-8  cursor-pointer hover:text-mainColor ">
            Profile
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="hidden sm:block cursor-pointer " onClick={handleToggleLinks}/>
        {
          isOpen &&<ul className="group-[]: sm:flex-col sm: bg-[#eeeeeee0] sm:text-[black] sm:w-full sm:h-[50vh] sm:z-50 sm:space-x-0 sm:absolute sm:top-[49px] sm:left-0  space-x-14 flex items-center text-base font-semibold text-[#808080] ">
          <li className=" active py-8 cursor-pointer   ">Home</li>
          <li className=" py-8 cursor-pointer hover:text-mainColor  ">
            My Courses
          </li>
          <li className="py-8 cursor-pointer hover:text-mainColor  ">Tracs</li>
          <li className="py-8  cursor-pointer hover:text-mainColor ">
            Profile
          </li>
        </ul>
        }
        
        <div className="gap-4 sm:gap-0 flex justify-between itmes-center">
          <Btn style="rounded-2xl sm:rounded-md  sm:text-xs py-[5px] text-[14px] font-semibold w-fit">
            Upgrade
          </Btn>
          <div className="gap-2 sm:gap-1 flex justify-between sm:items-center itmes-center">
            <img
              src="./Search.svg"
              alt="search"
              className="cursor-pointer  block sm:p-1 sm:w-5 sm:h-5 p-3 w-12 h-12 rounded-full border-x border-[#EAEAEA]"
            />
            <img
              src="./Home.svg"
              alt="search"
              className="cursor-pointer block sm:p-1 sm:w-5 sm:h-5 p-3 w-12 h-12 rounded-full border-x border-[#EAEAEA]"
            />
            <img
              src="./Notification.svg"
              alt="search"
              className="cursor-pointer  block sm:p-1 sm:w-5 sm:h-5 p-3  w-12 h-12 rounded-full border-x border-[#EAEAEA]"
            />
          </div>
        </div>
      </div>
      {/* End header  */}
      {/* start Main  */}
      <div className="flex items-start gap-7 sm:gap-2 py-10">
        {/* Start Side Bar  */}
        <div className="flex-[1] mx-9 sm:mx-4">
          <div className="mb-16 flex flex-col justify-between items-start  px-3 py-6 border-[1px] border-mainGray rounded-[28px]">
            <div className="flex items-center justify-start sm:flex-col sm:ml-0  gap-2 ml-5 mb-11 ">
              <img src="./photoProfile.svg" alt="" />
              <div>
                <h1 className="mb-2">Hello, Ramy !</h1>
                <span className=" block relative w-[100px] h-[3px] text-xs bg-[#D9D9D9] text-[#D9D9D9] before:content-['']  before:absolute before:top-0 before:left-0 before:bg-mainColor before:w-[40%] before:h-full after:-right-7 after:top-1/2 after:-translate-y-1/2 after:absolute after:content-['40%']"></span>
              </div>
            </div>
            <div className="sm:text-center   ">
              <img
                src="./star.svg"
                alt="star"
                className="inline-block ml-5 sm:m-0"
              />
              <span className="text-mainColor ml-4 inline-block">Streck</span>
              <div className=" flex items-start justify-center sm:flex-col border-b-[1px]  border-mainGray ">
                <div className="flex-1 p-5 text-center relative sm:after:hidden sm:w-full after:absolute after:content-[''] after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[50px] after:bg-mainGray ">
                  <h1 className="font-semibold text-[#000] text-base ">
                    3 Days
                  </h1>
                  <p className="text-mainGray text-xs  ">Challenge Days Done</p>
                </div>
                <div className=" flex-1 p-5 text-center   ">
                  <h1 className="font-semibold text-[#000] text-base ">
                    2 Days
                  </h1>
                  <p className="text-mainGray text-xs  ">
                    Remaining Until The Next Milestone
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mt-11 sm:text-center">
              <img
                src="./teacher.svg"
                alt="star"
                className="inline-block ml-5 sm:ml-0"
              />
              <span className="text-mainColor ml-4 inline-block">Courses</span>
              <div className=" flex items-center justify-center sm:flex-col">
                <div className=" p-5 sm:pr-5 pr-7 text-center relative sm:after:hidden after:absolute after:content-[''] after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[50px] after:bg-mainGray ">
                  <h1 className="text-xs">completed </h1>
                  <p className="text-mainGray text-xs  ">2</p>
                </div>
                <div className="  p-5 sm:pl-5 pl-7 text-center  ">
                  <h1 className="text-xs">In Progress</h1>
                  <p className="text-mainGray text-xs  ">1</p>
                </div>
              </div>
            </div>
          </div>
          {/* start card pay  */}
          <div className=" text-center  px-8 py-6 sm:px-1  border-[1px] border-mainGray rounded-[28px]">
            <img src="./Pay.svg " alt="pay" className="mx-auto" />
            <h1 className="font-semibold text-xl sm:text-sm text-[#172239] mt-2 mb-3 ">
              Upgrade Plan
            </h1>
            <p className="font-medium text-xl text-mainGray sm:text-xs mb-14 ">
              Become a <span className="text-[#172239] ">Pro</span> member today
              and save more than <span className="text-[#172239] ">75%.</span>
            </p>
            <Btn style="rounded-2xl  py-[5px] text-[14px] sm:text-sm sm:rounded-xl sm:w-fit sm:px-4 sm:m-auto font-semibold ">
              See Deal
            </Btn>
          </div>
        </div>
        {/* end card pay  */}

        {/* End Side Bar  */}
        {/* Start cards section  */}
        <div className="flex-[3]">
          {/* start keep going  */}
          <div className="mb-7">
            <h1 className="font-semibold text-xl mb-7 ">Keep Going</h1>

            <div className="grid  gap-[25px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
              {/* start card  */}
              <Card
                img="Card1"
                type="Computer Science"
                time="3 Days , 6 h"
                nameCourse="Flutter"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={50}
              />
              <Card
                img="card2"
                type="Computer Science"
                time="3 Days , 5 h"
                nameCourse="Web"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={99}
              />
              <Card
                img="card3"
                type="Graphic Design"
                time="3 Days , 6 h"
                nameCourse="Photoshop"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={70}
              />

              {/* end card  */}
            </div>
          </div>
          {/* End keep going  */}
          {/* start recommended */}
          <div className="mb-7">
            <h1 className="font-semibold text-xl mb-7 ">Recommended Courses</h1>

            <div className="grid  gap-[25px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
              {/* start card  */}
              <Card
                img="Card4"
                type="Computer Science"
                time="3 Days , 6 h"
                nameCourse="Figma"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                cost="500$"
                rate={3.5}
              />
              <Card
                img="card5"
                type="Computer Science"
                time="3 Days , 5 h"
                nameCourse="Data Analysis"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                cost="FREE"
                rate={3.5}
              />
              <Card
                img="card6"
                type="Back End"
                time="3 Days , 6 h"
                nameCourse="Php"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                rate={3.5}
                cost="FREE"
              />

              {/* end card  */}
            </div>
          </div>
          {/* end recommended */}
        </div>
        {/* End cards section  */}
      </div>
      {/* End Main  */}
    </div>
  );
};

export default Home;
