import { useState } from "react";
import InputField from "./InputField";
import { registerUser } from "../../services/api";

const RegisterForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    admissionNumber: "",
    password: "",
    role: "member",
    club: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] mx-auto p-4 border rounded-lg bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <InputField label="Full Name" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
      <InputField label="Admission Number" id="admissionNumber" name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} required />
      <InputField label="School Email" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <InputField label="Password" id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />

      <div className="flex flex-col mb-3">
        <label htmlFor="role">Role</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange} className="border rounded-lg px-3 py-2">
          <option value="member">Member</option>
          <option value="club lead">Club Lead</option>
        </select>
      </div>

      <InputField label="Club" id="club" name="club" value={formData.club} onChange={handleChange} />

      <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg">Register</button>
      <p className="text-sm mt-3">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="text-blue-600 underline">
          Login
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
