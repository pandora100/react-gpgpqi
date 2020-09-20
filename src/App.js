import React,{
  useRef
} from "react";
import "./style.css";

export default function App() {
  const elementRef = useRef(null);
  
  const onClick = () => {
    elementRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return <div className = "container">
    <button className="button" onClick = {onClick}>Scroll down</button>
    <div className = "content">
      <div ref={elementRef}>Element</div>
    </div>
  </div>
}
