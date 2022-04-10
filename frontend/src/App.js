import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage";
import MyNotes from "./screens/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
    
      <Fragment>
        <Header></Header>
        <main className="absolute left-0">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} exact></Route>
          <Route path="/myNotes" element={<MyNotes></MyNotes>}></Route>
        </Routes>
        </main>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
