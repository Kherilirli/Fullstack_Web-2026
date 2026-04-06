import './App.css'
import ButtonApp from './component/Button'
import Counter from './component/Counter'
import CounterReduce from './component/CounterReduce'
import ExpensiveCalculation from './component/ExpensiveCalculation'
import Produk from './component/Produk'
import ProfileApp from './component/ProfileApp'
import TextInput from './component/TextInput'
import Timer from './component/Timer'


//Spread Operator
// const originalArray = [1,2,3];
// const copiedArray = [...originalArray];

// copiedArray.push(4);

// console.log(originalArray); //output: [1,2,3]
// console.log(copiedArray); //output: [1,2,3,4]

// //combined array
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray); //output: [1,2,3,4,5,6]

// //fungsi dengan spread operator
// function sum(a, b, c) {
//   return a + b + c;
// }
// let numbers = [1, 2, 3];
// console.log(sum(...numbers));

function App() {

  return (
    <>
      <Produk />
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <ProfileApp /> */}
      {/* <TextInput /> */}
      {/* <CounterReduce /> */}
      {/* <ExpensiveCalculation num={5} /> */}
      {/* <ButtonApp /> */}
    </>
  )
}

export default App
