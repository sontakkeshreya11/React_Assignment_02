import React from "react";
import { useParams } from "react-router-dom";
import Listproduct from "../Pages/Listproduct";

function Topic() {
  let { topicId } = useParams();
  return (
    <>
      <Listproduct val={topicId} />
      {console.log(topicId)}
    </>
  );
}

export default Topic;
