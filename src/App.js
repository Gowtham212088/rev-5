import Color from "./Color";
import Navbar from "./Navbar";
import NotFound from "./Notfound";
import {BrowserRouter as Router,Switch as Stch,Route, Redirect} from "react-router-dom";
import App from "./Movie";
import Home from "./Home";
import Details from "./MovDetails";


function MainPage(){
  return(
    <div>
      <Router>
      <Navbar/>
        <Stch>
         
            <Route   path="/home" >
        <Home/>
            </Route>

              <Route exact  path="/movies/:id" >
              <Details/>
              </Route>
              
           <Route path="/movies" >
           <Redirect to="/flim"/>               {/* Here we are redirecting a movie to flim. */}
           <App/>
             </Route> 

             <Route path="/flim" >  
                                                {/* Here we are giving a new name for same App page unless deleting Movie path.*/}
           <App/>
             </Route>
          
        <Route path="/color">
            <Color/>
              </Route> 

              <Route path="**">
             <NotFound />
              </Route>
            
            
            </Stch>
            </Router>
    </div>
  )
}
export default MainPage;