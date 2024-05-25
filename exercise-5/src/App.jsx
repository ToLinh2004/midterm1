import Card from "./components/Card";
import { All_SUDENT } from "./data";

function App() {
  return (
    <>
    <div className="container">
    <div className="row">
      {All_SUDENT.map((item,index)=>(
            <Card  key={index} props={item}/>
          ))}
      </div>
      </div>
    </>
  );
}

export default App;
