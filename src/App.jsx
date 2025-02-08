import Clock from "./Clock";
import Counter from "./Contatore";


function App() {

    return(

        <>
        <Counter  initialValue={3} incrementAmount={3} />
        <Clock/>
        
        </>

       
    )
    
}

export default App