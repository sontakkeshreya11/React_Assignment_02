import{ BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Productoperation from "./Productoperation";

function Manageproduct() {
    let { path, url } = useRouteMatch();
    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/addproduct` }className="Link1">Add Product</Link>
          </li>
          <li>
            <Link to={`${url}/editproduct`} className="Link1">Edit Product</Link>
          </li>
          <li>
            <Link to={`${url}/deleteproduct`} className="Link1">Delete Product </Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/:operationId`}>
            <Productoperation />
          </Route>
        </Switch>
      </div>
    );
}

export default Manageproduct;