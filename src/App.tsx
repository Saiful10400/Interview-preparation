// import { useEffect, useState } from "react";

import { useCallback, useMemo, useState } from "react";
import ShowCount from "./component/ShowCount";
import CounterButton from "./component/CounterButton";
import Tittle from "./component/Tittle";
import BigData from "./component/BigData";
import HoverEffectCalender from "./component/HoverEffectCalender";
import ImageCardSlider from "./component/ImageCardSlider";


// const App = () => {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(p => p + 1)
//     }, 1000);
//     return () => clearInterval(timer)
//   }, [])

//   useEffect(()=>{
//     document.title=`Count: (${count})`

//   },[count])

//   return (
//     <div>
//       Home
//     </div>
//   );
// };

// export default App;




const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  const increment1 = useCallback(function increment1() {
    setCount1(p => p + 1)
  }, [])

  const increment2 = useCallback(function increment2() {
    setCount2(p => p + 5)
  }, [])


  // const bigCount = useMemo(() => {
  //   let i = 0
  //   while (i <= 10000000000) i = i += 1
  //   console.log("EVEN", i)
  //   return "EVEN"
  // }, [])

  return (
    <div>
      {/* <Tittle />
      <h1>{"bigCount"}</h1>
      <ShowCount count={count1} tittle="Counter One" />
      <CounterButton children="Increment count1" fn={increment1} />
      <ShowCount count={count2} tittle="Counter Two" />
      <CounterButton children="Increment count2" fn={increment2} />
      <BigData /> */}
      {/* <HoverEffectCalender /> */}
      <ImageCardSlider/>
    </div>
  );
};

export default App;