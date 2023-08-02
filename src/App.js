import TipCalculator from "./components/TipCalculator";

function App() {
  // const [bill, setBill] = useState(0);
  // const [tip, setTip] = useState("disqualified");

  // let calcTip;

  // if (tip === "disqualified") calcTip = 0;
  // if (tip === "okay") calcTip = 2.5;
  // if (tip === "good") calcTip = 5;
  // if (tip === "amazing") calcTip = 10;

  // const calcBill = bill + calcTip;

  // function handleChangeBill(e) {
  //   setBill(e.target.value);
  // }

  // function handleChangeTip(e) {
  //   setTip(e.target.value);
  // }

  // function handleClick() {
  //   setBill(0);
  //   setTip("disqualified");
  // }

  return (
    <TipCalculator />
    // <div className="App">
    //   <BillInput bill={bill} onHandleBill={handleChangeBill} />
    //   <SelectPercentage tip={tip} onHandleTip={handleChangeTip}>
    //     <span>How did you like the service?</span>
    //   </SelectPercentage>
    //   <SelectPercentage>
    //     <span>How did your friend like the service?</span>
    //   </SelectPercentage>
    //   <>
    //     <h3>{bill > 0 && `You pay ${calcBill} (${bill} + $${calcTip} tip)`}</h3>

    //     <button onClick={handleClick}>Reset</button>
    //   </>
    // </div>
  );
}

export default App;
