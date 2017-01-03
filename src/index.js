import React from 'React';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyDWjxHJvmrP45RoodSPjeZ7KPxIwIDDZHo';

const App = () => {
  return <div>
  <SearchBar />
  </div>
}




ReactDOM.render(<App />,
  document.querySelector('.container'));
