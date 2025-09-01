import { useState } from "react";
import InputField from "./InputField";
import { loginUser } from "../../services/api";

const LoginForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] mx-auto p-4 border rounded-lg bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <InputField label="Email" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <InputField label="Password" id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">Login</button>
      <p className="text-sm mt-3">
        New member?{" "}
        <button type="button" onClick={onSwitch} className="text-blue-600 underline">
          Create an account
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
