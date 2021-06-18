import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/home.js'
import Header from './Components/header';
import SecondHeader from './Components/secondheader';
import PopularPage from './Components/Search_sort/popularpage';
import Footer from './Components/Footer/footer';
import AllBooksPage from './Components/Search_sort/allbookspage'
import TodayDealsPage from './Components/Search_sort/todaydealspage'
import ProductDetailspage from './Components/Body/description.js';
import NewRelease from './Components/Search_sort/newrelease.js';
import Headersearch from './Components/Search_sort/headersearch.js';
import Login from "../src/Components/Body/login"

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <SecondHeader/> 
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/allbookspage" component={AllBooksPage}></Route>
                <Route path="/todaydealspage" component={TodayDealsPage}></Route>
                <Route path="/popularpage" component={PopularPage}></Route> 
                <Route path="/description" component={ProductDetailspage}></Route>
                <Route path="/newrelease" component={NewRelease}></Route>
                <Route path="/headersearchresults/:searchelement" component={Headersearch}></Route>
                <Route path="/login" component={Login}></Route>
                
              </Switch>        
        <Footer/>
      </Router>
    </div>
   
  );
}

export default App;
