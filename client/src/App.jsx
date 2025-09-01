import { Routes, Route, Link } from "react-router-dom";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Main from "./components/pages/Main";
import Attendance from "./components/pages/Attendance";

const App = () => {
  return (
    <div className="h-screen">
	<Navs />
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/" element={<Main />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
