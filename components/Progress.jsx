import React from "react";

const ProgressBar2 = ({ value }) => {
  return (
    <div className="bg-accent dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
      <div
        className={`bg-primary absolute top-0 left-0 h-full w-[70%] rounded-2xl`}
      >
        <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
          <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
          75%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar2;
