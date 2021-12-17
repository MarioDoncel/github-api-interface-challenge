import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {Profile, Repositories} from '../pages/index';


  export const Router = ()=>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Profile />}/>
          <Route path="/repositories" element={<Repositories />}/>
          <Route path="/starred" element={<Repositories starred={true} />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router
  