import './App.css';
import Header from '../Header/Header';
import Categories from "../Categories/Categories";
import AllObjectsContainer from "../AllObjectsContainer/AllObjectsContainer";
import React, { useState } from 'react';


function App() {
    const [category, setCategory] = useState('people');
    return (
        <div className="App">
            <Header/>
            {/*<Categories setCategory={setCategory}/>*/}
            <AllObjectsContainer category={category}/>
        </div>
    );
}

export default App;
