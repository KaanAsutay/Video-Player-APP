import Videos from "./Components/Videos";
import { useGlobalContext } from "./Context/global";

function App() {
  const g = useGlobalContext()
  console.log(g)
  
  return (
    <div className="App">
      <Videos />
    </div>
  );
}

export default App;