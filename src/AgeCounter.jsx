import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter() {
  const [age, setAge] = useState(30);
  function increaseAge() {
    setAge(age + 1);
  }
  return (
    <div>
      <button onClick={increaseAge}>Increase age</button>
      {/* <p>You are {age} years old</p> */}
      <AgeDisplay age={age} />
    </div>
  );
}
