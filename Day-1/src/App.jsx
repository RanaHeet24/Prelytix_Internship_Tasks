import { useState } from "react";

import Header from "./components/Header";
import SkillList from "./components/SkillList";

import "./App.css";

function App() {

  const skills = [

    { name: "JavaScript", level: 95 },
    { name: "React", level: 80 },
    { name: "CSS", level: 92 }

  ];

  const [stamina, setStamina] = useState(100);

  const [count, setCount] = useState(0);

  function handleClick() {

    let newCount = count + 1;

    setCount(newCount);

    if (newCount % 5 === 0) {
      setStamina(stamina - 15);
    }
    else {
      setStamina(stamina - 2);
    }

  }

  return (

    <div className="hr-container">

      <Header />

      <SkillList skills={skills} />

      <div className="hr-stamina-box">

        <h2>Developer Stamina</h2>

        <h3>Stamina : {stamina}</h3>

        <button
          className="hr-btn"
          onClick={handleClick}
        >

          Write Code

        </button>

      </div>

    </div>

  );
}

export default App;