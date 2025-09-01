const InputField = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col mb-3 w-[90%] mx-auto">
    <label htmlFor={props.id} className="mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      className="border border-gray-400 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default InputField;
