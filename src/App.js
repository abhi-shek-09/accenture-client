import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MyIssues from "./pages/MyIssues";

function App() {
  
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element= {<Main/>}></Route>
            <Route path="/main" element= {<Main/>}></Route>
            <Route path="/myissues" element= {<MyIssues/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
