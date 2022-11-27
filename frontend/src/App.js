import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/about";
import Models from "./components/Models";
import Model1 from "./components/models/model1";
import Models2 from "./components/models2";
import Models3 from "./components/models3";
import Models4 from "./components/models4";
import Models5 from "./components/models5";
import Model3 from "./components/models/model3"
import Model2 from "./components/models/model2";
import './components/css/analytics.css'
import Roofing from "./components/model1/roofing";
import Painting from "./components/model1/painting";
import Structural from "./components/model1/structural";
import Cabinet from "./components/model1/cabinet";
import Plumbing from "./components/model1/plumbing";
import Plumbing2 from "./components/model2/plumbing2";
import Structural2 from "./components/model2/structural2";
import Cabinet2 from "./components/model2/cabinet2";
import Roofing2 from "./components/model2/roofing2";
import Painting2 from "./components/model2/painting2";
import Model4 from "./components/models/model4";
import Model5 from "./components/models/model5";
import Model6 from "./components/models/model6";
import Models6 from "./components/models6";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/models" element={<Models/>}/>
        <Route path="/model1" element={<Model1/>}/>
        <Route path="/models2" element={<Models2/>}/>
        <Route path="models3" element={<Models3/>}/>
        <Route path="models4" element={<Models4/>}/>
        <Route path="models5" element={<Models5/>}/>
        <Route path="model3" element={<Model3/>}/>
        <Route path="model2" element={<Model2/>}/>
        <Route path="roofing" element={<Roofing/>}/>
        <Route path="painting" element={<Painting/>}/>
        <Route path="structural" element={<Structural/>}/>
        <Route path="cabinet" element={<Cabinet/>}/>
        <Route path="plumbing" element={<Plumbing/>}/>
        <Route path="plumbing2" element={<Plumbing2/>}/>
        <Route path="cabinet2" element={<Cabinet2/>}/>
        <Route path="structural2" element={<Structural2/>}/>
        <Route path="painting2" element={<Painting2/>}/>
        <Route path="roofing2" element={<Roofing2/>}/>
        <Route path="model4" element={<Model4/>}/>
        <Route path="model5" element={<Model5/>}/>
        <Route path="model6" element={<Model6/>}/>
        <Route path="models6" element={<Models6/>}/>
       
      </Routes>
    </Router>
  );
}
 
export default App;
