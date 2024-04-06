import React from "react";
import { CircleCheckBig, AlertCircle, Loader2, Info } from "lucide-react";

const Alert = ({ type, message, visible = true }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CircleCheckBig size={16} strokeWidth={2} color="#0F920F" />;
      case "error":
        return <AlertCircle size={16} strokeWidth={2} color="#FF0000" />;
      case "loading":
        return <Loader2 size={16} strokeWidth={2} className="animate-spin" />;
      case "info":
        return <Info size={16} strokeWidth={2} color="#0077B6" />;
      default:
        return null;
    }
  };

  const getColor = () => {
    switch (type) {
      case "success":
        return "#0F920F";
      case "error":
        return "#FF0000";
      case "info":
        return "#0077B6";
      default:
        return "#000000";
    }
  };

  return (
    <div
      className={`w-full h-fit py-10 bg-transparent absolute flex justify-center items-center ${
        visible ? "visible" : "hidden"
      }`}
    >
      <div style={{border : `1px solid ${getColor()}`}} className={`bg-white  absolute rounded-lg  shadow-lg py-5 w-1/4 flex justify-center items-center gap-2`}>
        {getIcon()}
        <p  style={{color: `${getColor()}`}}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
