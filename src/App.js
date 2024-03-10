import './App.css';
// import Navbar from "./components/Navbar"
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
// import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import Arts from './routes/Arts.js';

import Explore from './routes/Explore';
import Math from './routes/Math';
import Login from './routes/Login';
import AndhraPradesh from './components/States/AndhraPradesh';
import ArunachalPradesh from './components/States/ArunachalPradesh';
import Tamilanadu from './components/States/Tamilanadu';
import Assam from './components/States/Assam';
import Bihar from './components/States/Bihar';
import Festivals from './routes/Festivals.js';
import Heritagesites from './routes/Heritagesites.js';
import Goa from './components/States/Goa';
import Kerala from './components/States/Kerala';
import Chhattisgarh from './components/States/Chhattisgarh';
import Madhyapradesh from './components/States/Madhyapradesh';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/arts" element={ <Arts/>}/>
      <Route path="/chhattisgarh" element={ <Chhattisgarh/>}/>
      {/* <Route path="/service" element={ <Service/>}/> */}
      <Route path="/contact" element={ <Contact/>}/>
 \
      <Route path="/signup" element={ <SignUp/>}/>
      <Route path="/" element={ <Login/>}/>
     
      <Route path="/explore" element={ <Explore/>}/>
      <Route path="/festivals" element={ <Festivals/>}/>
      <Route path="/heritagesites" element={ <Heritagesites/>}/>
      <Route path="/math" element={<Math />}/>
      <Route path="/andhrapradesh" element={<AndhraPradesh/>}/>
      <Route path="/arunachalpradesh" element={<ArunachalPradesh/>}/>
      <Route path="/tamilanadu" element={<Tamilanadu/>}/>
      <Route path="/assam" element={<Assam/>}/>
      <Route path="/bihar" element={<Bihar />}/>
      <Route path="/goa" element={<Goa />}/>
      <Route path="/kerala" element={<Kerala />}/>
      {/* <Route path="/chhattisgarh" element={<Chhattisgarh />}/> */}
      <Route path="/madhyapradesh" element={<Madhyapradesh />}/>
     </Routes>
 

      
    </div>
  );
}

export default App;
