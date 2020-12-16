import NavbarMenu from './components/layouts/Menu';
import Footer from './components/layouts/Footer';
import Homepage from './components/pages/Homepage';
import AllEarrings from './components/pages/AllEarrings';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

library.add(fab, faShoppingCart, faSearch, faUser);

const earrings = [
  { id: 1, descript: "Gold earrings with pink gemstones", imgsource: "/photos/earrings/1.jpg"},
  { id: 2, descript: "Gold earrings with pink gemstoness", imgsource: "/photos/earrings/2.jpg"},
  { id: 3, descript: "Gold earrings with pink gemstonesddd", imgsource: "/photos/earrings/3.jpg"},
  { id: 4, descript: "Hoop earrings with shells", imgsource: "/photos/earrings/4.jpg"},
  { id: 5, descript: "Long earrings with tiny purple germs", imgsource: "/photos/earrings/5.png"},
  { id: 6, descript: "Redstone round earrings", imgsource: "/photos/earrings/6.jpg"},
  { id: 7, descript: "Gold earrings with yellow germstone", imgsource: "/photos/earrings/7.jpg"},
  { id: 8, descript: "White and black stud earrings", imgsource: "/photos/earrings/8.jpg"},
  { id: 9, descript: "Colourful gems earrings", imgsource: "/photos/earrings/9.jpg"},
  { id: 10, descript: "C-shaped earrings with shells", imgsource: "/photos/earrings/10.jpg"},
  { id: 11, descript: "Silver red germstone earrings", imgsource: "/photos/earrings/11.jpg"},
  { id: 12, descript: "Mix-shaped pearls earrings", imgsource: "/photos/earrings/12.jpg"},
  { id: 13, descript: "Gold gling gling earrings", imgsource: "/photos/earrings/13.jpg"}
];

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/all-earrings" render={(props) => <AllEarrings {...props} initialItems={earrings} /> } />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
