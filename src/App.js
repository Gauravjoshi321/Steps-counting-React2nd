import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // let step = 1;

  function handlePrevious() {
    if (step > 1) setStep(st => --st);
  }
  function handleNext() {
    if (step < 3) setStep(st => ++st);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(isO => !isO)}>&times;</button>

      {isOpen && (<div className="steps">

        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <Button onClick={handlePrevious}> <span>👈</span> Previous</Button>

          <Button onClick={handleNext}> Next <span>👉</span></Button>
        </div>

      </div >
      )}
    </>
  )
}

function Button({ onClick, children }) {
  return <button
    style={{
      backgroundColor: "#7950f2",
      color: "#fff"
    }}
    onClick={onClick}>
    {children}
  </button>
}

export default App;
