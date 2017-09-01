import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import App from './components/App'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>
        <Route exact="/" component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
