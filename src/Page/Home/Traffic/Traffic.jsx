import React from "react";
import Pies from "../../../Component/Ui/Chart/Pies";

const Traffic = () => {
  return (
    <div>
      <p>Traffic</p>

      <Pies />

      <div className="flex justify-center items-center gap-x-8">
        <div>
          <p className="text-2xl font-bold">33%</p>
          <p>Facebook</p>
        </div>
        <div>
          <p className="text-2xl font-bold">55%</p>
          <p>Youtube</p>
        </div>
        <div>
          <p className="text-2xl font-bold">12%</p>
          <p>Direct Search</p>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
