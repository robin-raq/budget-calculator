import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'



const initialExpenses = [
  {id:uuid(), charge: "rent", amount: 1600},
  {id:uuid(), charge: "car payment", amount: 400},
  {id:uuid(), charge: "credit card bill", amount: 1200}
]

//console.log(initialExpenses)

function App() {
  //console.log(useState())
  // const result = useState(initialExpenses)
  // const expenses = result[0]
  // const setExpense = result[1]

//*********************state values************
/* all expenses, add expense*/
  const [expenses, setExpenses] = useState(initialExpenses)
  //console.log(expenses, setExpenses)
  
  // single expense
  const [charge, setCharge] = useState('')

  // single amount
  const [amount, setAmount] = useState('')
  //*********************functionality************
  
  const handleCharge = e=>{
    //console.log(`charge : ${e.target.value}`)
    setCharge(e.target.value)
  }

  const handleAmount = e=>{
    //console.log(`amount :  ${e.target.value}`)
    setAmount(e.target.value)
  }

  const handleSubmit = e=>{
    e.preventDefault()
    //console.log(charge, amount)
    if(charge !== " " && amount >0 ){
      const singleExpense = {id: uuid(), charge, amount: amount}
      setExpenses([singleExpense, ...expenses])
      setCharge("")
      setAmount("")

    } else {
      //handle alert
    }

  }

  return (
    <>
    <Alert/>
    <h1>budget calculator</h1>
    <main className ="App">
    <ExpenseForm 
      charge ={charge} 
      amount ={amount} 
      handleAmount= {handleAmount} 
      handleCharge ={handleCharge} 
      handleSubmit ={handleSubmit}/>
    <ExpenseList expenses ={expenses}/>

    </main>
    <h1>
      total spending: <span className ="total">
        ${expenses.reduce((acc, curr) => {
          return (acc+= parseInt(curr.amount))
        }, 0)}
      </span>
    </h1>
      
    </>
  );
}

export default App;
