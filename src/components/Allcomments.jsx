import React from "react";

const Allcomments = ({ comments }) => {
  //console.log(comments);

  return (
    <>
      <div className="container">
        {comments?.map((val, i) => (
          <div key={i} className="mb-5">
            <div className="flex gap-4">
              <div>
                <img src={val.imgname} alt="" className="h-10 w-10" />
              </div>
              <div className="font-bold my-auto">{val.username}</div>
              <div className="text-[#4B587C] my-auto">・ {val.time}</div>
            </div>
            <div className="ml-10">
              <div className="ml-8">
                <p>{val.comment}</p>
                <div className="flex gap-5 mt-4 text-[#4B587C]">
                  <div>
                    <button>{val.btn1}</button>
                  </div>
                  <div>
                    <button>{val.btn2}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allcomments;
