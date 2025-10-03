import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input_Field from "./components/Input_Field";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Routes>
        <Route path="/footer" element={<Footer />}></Route>
        {/* <Footer /> */}
        {/* <Input_Field /> */}
      </Routes>
    </div>
  );
}
export default App;
