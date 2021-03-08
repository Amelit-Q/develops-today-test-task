import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/action-creators/post";

export default function post() {
  const dispatch = useDispatch();
const post = useSelector(state => state.)

  React.useEffect(() => {
    dispatch(fetchPost);
    console.log()
  }, []);
  return <div></div>;
}
