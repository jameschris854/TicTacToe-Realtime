import "./App.css";
import "firebase/compat/firestore";
import "firebase/compat/app";
import HomePage from "./pages/HomePage/HomePage.component";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import TicTacToe from "./games/TicTacToe/TicTacToe";
import { AnimatePresence } from "framer-motion";
import IntroPage from "./pages/IntroPage/IntroPage.component";


const App = () => {
  const location = useLocation();
 
  return (
    <div className="App">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route 
            exact 
            path="/"
            render={() =>  <IntroPage details={'details'} />} 
            />
             <Route 
            exact 
            path="/home"
            render={() => <HomePage details={'details'} />
          } 
            />
             <Route 
            path="/game/:joinId"
            render={() =>  <TicTacToe />} 
            />
             <Route 
            exact 
            path="/game/"
            render={() => <TicTacToe />} 
            />
          </Switch>
      </AnimatePresence>
    </div>
  );
}



export default App;
