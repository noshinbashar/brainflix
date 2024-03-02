import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import{BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
       
      <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} />
        <Route path="/uploadpage" element={<UploadPage />} />
      
      </Routes>
      </BrowserRouter>
     
   
      
    </div>
  );
}

export default App;


 
