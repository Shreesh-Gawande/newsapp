import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
