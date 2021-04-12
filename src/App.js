import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import PortfolioPage from './pages/portfolio/portfolio.component';
import ContactPage from './pages/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/portfolio" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
