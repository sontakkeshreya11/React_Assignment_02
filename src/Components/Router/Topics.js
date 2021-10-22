import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Topic from "../Router/Topic";
import { getCategoriesapi } from "../../Api/Api";

function Topics() {
  let { path, url } = useRouteMatch();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCategories = async () => {
    try {
      const response = await getCategoriesapi();
      setCategories(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getCategories(), []);
  return (
    <>
      {isLoading ? (
        <p className="loading">loading..</p>
      ) : (
        <>
          <ul>
            {categories.map((category) => {
              return (
                <li>
                  <Link to={`${url}/${category}`} className="Link1">
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default Topics;
