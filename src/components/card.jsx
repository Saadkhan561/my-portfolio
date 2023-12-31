import React, { useState } from "react";

const Card = () => {
  const [cardBtn, setCardBtn] = useState(false);
  return (
    // <div className="text-white p-1  [perspective:1000px] group- border border-black">
    //   <div
    //     className={
    //       cardBtn
    //         ? "h-[200px] w-[300px] p-[1px] rounded-lg relative [transform-style:preserve-3d] [transform:rotateY(180deg)] transition-all duration-500 ease-in-out"
    //         : "h-[200px] w-[300px] p-[1px] rounded-lg relative [transform-style:preserve-3d] [transform:rotateY(0deg)] transition-all duration-500 ease-in-out"
    //     }
    //   >
    //     <div className="absolute inset-0">
    //       <img className="rounded-t-md" src="/images/mern.jpg" alt="" />
    //       <div
    //         className={
    //           cardBtn
    //             ? "p-2 bg-gray-900 hidden"
    //             : "p-2 bg-gray-900 flex items-center flex-col gap-2"
    //         }
    //       >
    //         <div>Naukri - Job Finding Website</div>
    //         <div>
    //           <button
    //             onClick={() => setCardBtn(!cardBtn)}
    //             className="bg-gray-800 p-1 cursor-pointer text-sm"
    //           >
    //             View Details
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="p-2 bg-black/90 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
    //       <div className="flex justify-end">
    //         <img
    //           className="cursor-pointer mb-2"
    //           onClick={() => setCardBtn(!cardBtn)}
    //           src="/images/cross.png"
    //           alt=""
    //           height={20}
    //           width={20}
    //         />
    //       </div>
    //       <div className="flex flex-col text-sm">
    //         A MERN stack based job finding application to find or post a job.
    //         <div className="mt-2 ">
    //           <p> Stacks Used:</p>
    //           <ul className="list-disc ml-4">
    //             <li>React</li>
    //             <li>Node JS</li>
    //             <li>Express JS</li>
    //             <li>MongoDB</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" relative border border-black h-[200px] w-[300px]">
      <div className={cardBtn ? "blur-xl duration-500 ease-in-out" : "blur-none duration-500"}>
        <img className="rounded-t-md" src="/images/mern.jpg" alt="" />
        <div className="p-2 bg-gray-900 flex items-center flex-col gap-2 text-white">
          <div>Naukri - Job Finding Website</div>
          <div>
            <button
              onClick={() => setCardBtn(!cardBtn)}
              className={cardBtn ? "hidden" : "bg-gray-800 p-1 cursor-pointer text-sm"}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className={cardBtn ? "absolute top-2 duration-500 text-white p-2" : "hidden"}>
        <div className="flex justify-end">
            <img onClick={() => setCardBtn(!cardBtn)} className="cursor-pointer" src="/images/cross.png" alt="" height={20} width={20} />
        </div>
        <div className="flex flex-col text-sm mt-2">
          A MERN stack based job finding application to find or post a job.
          <div className="mt-2 ">
            <p> Stacks Used:</p>
            <ul className="list-disc ml-4">
              <li>React</li>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
