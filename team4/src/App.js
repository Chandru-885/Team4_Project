import Home from './Components/home.js'
import Header from './Components/header';
import SecondHeader from './Components/secondheader';
import SecondPage from './Components/Search_sort/secondpage';
import PopularPage from './Components/Search_sort/popularpage';
import Footer from './Components/Footer/footer';
import TodayDeals from './Components/Body/todaydeals';
import NewRelease from './Components/Body/newrelease';
import PopularBooks from './Components/Body/popularbook.js';
import ProductDetailspage from './Components/Body/description.js';


import {Link} from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="app">

        <Header/>
        <SecondHeader/>

        <Router>
            <Link to="/bookdescription"></Link>
            <Link to="/todaydeals"></Link>
            <Link to="/secondpage"></Link>

            <Route path="/" exact component={Home}></Route>

            <Switch>
              <Route path="/bookdescription" component={ProductDetailspage}></Route>
            </Switch>

        </Router>
        <Footer/>
    </div>
   
  );
}

export default App;
