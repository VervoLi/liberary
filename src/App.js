
import './App.css';

import image from './book.jpg';
import { LibraryCard } from './LibraryCard';
import imageTwo from './reveal.jpg';
function App() {
  return (
    <div className="app">
      <div className="container">
    <img src={image} width="370px"alt="book"></img>
    </div>
    <div className="container">
    <h1>Inventory of books read :</h1>
    </div>
      <LibraryCard/>
      <div className="container">
<img src= {imageTwo} width="370px"alt="reveal book"></img>
    </div>
    </div>  
  
  );
}

export default App;
