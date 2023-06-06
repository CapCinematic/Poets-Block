import logo from './logo.svg';
import './App.css';
import useAcquireInfo from './apiCalls';
import FeaturedPoets from './FeaturedPoets';

const App = () => {
  const poets = [
    {id: 1, name:'Emily Dickinson', link: 'https://poetrydb.org/author/EmilyDickenson/title'}
  ];

  return (
    <div>
      <h1>Poets Block</h1>
      <FeaturedPoets poets={poets}/>
    </div>
  )
}

export default App;
