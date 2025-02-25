import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <main className="sm:p-8 px-4 py-8 w-full bg-[#f2f3f8] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/create-post"} element={<CreatePost/>}/>
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
