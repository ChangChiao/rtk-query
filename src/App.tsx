import { useState, useEffect } from 'react'
import Child from "./components/Child";
import './App.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/index"; 
import { fetchUserList } from "./store/userSlice";
function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);
  return (
    <div className="App">
        <Child />
    </div>
  )
}

export default App
