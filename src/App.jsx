import { RouterProvider } from "react-router-dom";
import "./App.css";
// import 'Layout' from 
import  routes  from "./Routes/Router";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
