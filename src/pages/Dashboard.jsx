import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [linkData, setLinkData] = useState(
    "address=0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8&amount=44787"
  );
  const navigate = useNavigate();

  const openPayLink = () => {
    navigate(`pay/${linkData}`);
  };
  return (
    <div className="items-center flex flex-col py-12 justify-center">
      <div className="flex w-1/2 shadow-sm h-1/2  border-1 border-gray-400 flex-col rounded-md">
        <div className="w-full bg-green-600 text-white p-3 rounded-t-md text-lg">
          <h2>Create a CELO pay link</h2>
        </div>

        <div className="p-4 my-8">
          <div className="flex mb-5 flex-col items-start border-b-[0.5px]">
            <label htmlFor="addredd" className="text-sm text-gray-400 ">
              Paste your address
            </label>
            <input
              type="text"
              className="w-full border-1 py-4 outline-none border-gray-900"
            />
          </div>

          <div className="flex mb-5 flex-col items-start ">
            <label htmlFor="addredd" className="text-sm text-gray-400 ">
              Enter CEL Amount
            </label>
            <input
              type="number"
              placeholder="0.0"
              className="w-1/2 border-[0.5px] py-2 rounded-md px-2 mt-2 outline-none border-gray-100"
            />
          </div>

          {linkData && (
            <div
              onClick={openPayLink}
              className="text-xs text-blue-400 cursor-pointer"
            >
              Open QR link
            </div>
          )}
          <button className="bg-green-600  my-4 w-full p-3 rounded-md text-white">
            Generate QR Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
