import {
	BrowserRouter as  Router,
	Routes,
	Route

} from "react-router-dom"
import Navs from "./components/Navs"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Attendance from "./components/Attendance"
import Form from "./components/Form"
const App =()=> {
  return (
	<div className="h-screen"> 
		<Router>
			<Navs />
			<Routes>
				<Route path="/login" element={<Form />} />
				<Route path="/" element={<Main />} />
				<Route path="'attandance" element={<Attendance/>} />
			</Routes>
		<Footer />
		</Router>
	</div>
)
}
export default App
