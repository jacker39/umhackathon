import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Import the new components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CharitySection from './components/CharitySection/CharitySection';
import Footer from './components/Footer/Footer';

// Define a simple functional component for the main charity layout
const CharityLayout = () => (
  <Fragment> {/* Use Fragment to avoid adding extra divs */}
    <Header />
    <Hero />
    <CharitySection />
    <Footer />
  </Fragment>
);


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div>

          <Switch>
            {/* Route for the Charity Layout */}
            {/* It will render Header, Hero, CharitySection, Footer */}
            <Route exact path="/" component={CharityLayout} />

            {/* Optional: Add a redirect if someone lands on a non-defined route,
                though the original didn't have a catch-all */}
            {/* <Redirect from="*" to="/" /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;