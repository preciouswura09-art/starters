import { Coffee } from "lucide-react";
import Cards from "./components/Cards";
import { cards } from "./constants";

const Features = () => {
 

  return (
    <div>
      <h3>Features</h3>
      <div className="card-con">
        {/* <Cards cardDetails={card1}/>
        <Cards cardDetails={card1}/>
        <Cards cardDetails={card1}/>
        <Cards cardDetails={card1}/> */}
        {cards.map((card)=> 
            <Cards cardDetails={card}/>
        )}
      </div>
    </div>
    
  );
};



export default Features;
