import { Routes, Route, Link } from "react-router-dom";
import Navs from "./components/Navs";
import Form from "./components/Form";
import Main from "./components/pages/Main";
import Attendance from "./components/pages/Attendance";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/" element={<Main />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
};

export default App;
