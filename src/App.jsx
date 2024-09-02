import { useState } from 'react';
import NavigationBar from './components/NavigationBar.jsx'; // Import NavigationBar

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar /> {/* Add NavigationBar here */}
      <h1>Home Page</h1>
    </>
  );
}

export default App;
