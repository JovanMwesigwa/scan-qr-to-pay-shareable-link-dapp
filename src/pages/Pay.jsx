import React from "react";
import QRCode from "qrcode.react";
import { useParams } from "react-router-dom";

const Pay = () => {
  const { session } = useParams();

  return (
    <div className="flex p-10 flex-1 flex-col items-center justify-center">
      <div className="w-96 h-80 rounded-md flex items-center justify-center bg-gray-300">
        <QRCode className="w-full h-full" value={session} />
      </div>
    </div>
  );
};

export default Pay;
