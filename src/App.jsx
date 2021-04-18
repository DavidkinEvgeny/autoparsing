import './App.scss';
import Home from './Pages/Home/Home';
import Redemptionauto from './Pages/Redemptionauto/Redemptionauto';
import Redemptionspareparts from './Pages/Redemptionspareparts/Redemptionspareparts';
import Scraptruck from './Pages/Scraptruck/Scraptruck';
import Towtruck from './Pages/Towtruck/Towtruck';
import Scrap from './Pages/Scrap/Scrap';
// import Sale from './Pages/Sale/Sale';
import { Route } from 'react-router-dom'
import Ticker from './Components/Ticker/Ticker';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/redemptionauto' component={Redemptionauto} />
      <Route path='/redemptionspareparts' component={Redemptionspareparts} />
      <Route path='/scraptruck' component={Scraptruck} />
      <Route path='/towtruck' component={Towtruck} />
      <Route path='/scrap' component={Scrap} />
      {/* <Route path='/sale' component={Sale} /> */}
      <Ticker />
    </div>
  );
}

export default App;
