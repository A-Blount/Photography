import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Error from './components/error';
import NavBar from './components/navBar';
import Footer from './components/footer';
//pages
import Home from './pages/home';
import Contact from './pages/contact';
import GalleryImage from './pages/galleryImage';
import Gallery from './pages/gallery';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/gallery/:slug" component={GalleryImage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
  );
}
export default App;
