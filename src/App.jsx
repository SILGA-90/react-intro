import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
import "./global.css";

export function App() {
  return (
    <div>
      <Car />
      <Greetings />
    </div>
  );
}

// import { AgeCounter } from "./AgeCounter";

// export function App() {
//   return (
//     <div>
//       <AgeCounter />
//     </div>
//   );
// }

// import { Greetings } from "./Greetings";

// export function App() {
//   return (
//     <>
//       <h1>BONJOUR la communaute</h1>
//       <Greetings firstName={"SOULEY"} lastName={"SILGA"} age={28}>
//         <img
//           src="http://s29283.pcdn.co/wp-content/uploads/2018/12/5easystepstohelploweryourA1Clevels.jpg"
//           alt="random"
//         />
//       </Greetings>
//     </>
//   );
// }
