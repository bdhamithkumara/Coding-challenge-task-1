import React from "react";
import dpimg from "./img/image2.png";
import Allcomments from "./Allcomments.jsx";

const ComInsert = ({ comments }) => {
  return (
    <>
      <div className="container">
        <h4 className="font-bold text-[20px] mt-10">Discussion</h4>
        <form>
          <div className="flex mt-5">
            <div className="flex ">
              <img src={dpimg} alt="dpimg" />
            </div>
            <div className="flex px-5">
              <input
                type="text"
                placeholder="What are your thoughts?"
                className="text-black   border border-solid border-current  px-5 py-2  "
              />
            </div>
            <div className="flex  px-5">
              <button
                type="button"
                className="bg-[#7E34F6] text-white px-5 w-auto h-auto rounded-lg"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
        <div className="py-10">
          <hr className="h-px my-8  dark:bg-gray-900" />
        </div>
        <Allcomments comments={comments} />
      </div>
    </>
  );
};

export default ComInsert;
