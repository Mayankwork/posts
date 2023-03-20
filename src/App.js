import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import store from "./utils/store";
import { Provider } from 'react-redux';
import React from "react";
import Header from "./Components/Header";
import ViewItemModal from "./Components/ViewItemModal";
const appRouter = createBrowserRouter([{
  path:'/',
  element:<Home/> ,
  }])
function App() {
  return (
    <div className="App">
      
       <Provider store={store}>
       <Header />
       <RouterProvider router={appRouter}/>
       
       </Provider>    
        
    </div>
  );
}

export default App;
