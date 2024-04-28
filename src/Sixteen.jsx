import  {useState, createContext} from 'react';

const ThemeContext = createContext('light'); //Default Theme

const Sixteen = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme =()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
       <button style={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </button>
    </ThemeContext.Provider>
  )
}

export default Sixteen;