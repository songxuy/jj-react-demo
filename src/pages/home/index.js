import React from 'react';
import './index.css';
import {
  useParams
} from "react-router-dom";
function Home() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let { name } = useParams();
  return (
    <div className="home">
      <p>{name}</p>
      {
        list.map(item => {
          return <p key={item}>{item}</p>
        })
      }
    </div>
  );
}

export default Home;
