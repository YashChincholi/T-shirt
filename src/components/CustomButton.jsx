import { useSnapshot } from "valtio";
import state from "../store/index";

const CustomButton = ({ type, title, handelClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type == "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-1.5 py-2 rounded-md flex-1 ${customStyles}`}
      style={generateStyle(type)}
      onClick={handelClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
