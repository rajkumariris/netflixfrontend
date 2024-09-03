import Card from "../Card/Card";
import './cast.css';
function Cast({details}){

    return (
        <div className="wholeCast">
          {
            details.map(function(item){
               return  (<Card card= {item} />)
            })
          }
        </div>
    )
}
export default Cast;