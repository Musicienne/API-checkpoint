import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  const [submittedValue, setSubmittedValue] = useState('');
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const input = event.target.elements.inputField;
    setSubmittedValue(input.value);
  }
  return (
    <div className="post h3">
      {data.map((v) => (
        <>
          <h3>id={v.id}</h3>
          <h3>userId={v.userId}</h3>
          <h3>title={v.title}</h3>
          <p className="paragraph">{v.body}</p>
        </>
      ))}
    </div>
    
  );
};

export default App;

