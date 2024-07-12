import CustomButton from "./CustomButton";
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="filled"
          title="Full"
          handelClick={() => readFile("full")}
          customStyles="text-sm"
        />
        <CustomButton
          type="outline"
          title="Logo"
          handelClick={() => readFile("logo")}
          customStyles="text-sm"
        />
      </div>
    </div>
  );
};

export default FilePicker;
