import { useSnapshot } from "valtio";
import state from "../store/index";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handelClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type == "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
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
