import { Box } from "./Component/Box/Box";
import { Navbar } from "./Component/Navbar/Navbar";
import { Login } from "./Component/Login/Login";
import { BrowserRouter, Route, Routes} from 'react-router-dom'




function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Box/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
