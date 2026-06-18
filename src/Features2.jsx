import Cards2 from "./components/cards2"
import { house } from "./constants/house"

// GitHub is a cloud-based platform that hosts Git repositories, enabling developers to manage code, track changes, and collaborate efficiently. 
const Features2 = () => {
  return (
    <div>
        <h3>features2</h3>
    <div className='card-con2'>
        {house.map((data, index)=>
        <Cards2 Card2Details={data} key={index}/>
        )}
    </div>
    </div>
  );
};

export default Features2