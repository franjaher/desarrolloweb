import './ItemCount.css'
import Button from 'react-bootstrap/Button';

function ItemCount(){
    return(
        <>
         <div>
        <Button  variant="danger">+</Button> 
        <label>1 </label> 
        <Button  variant="danger">-</Button>    
        </div>
        
        </>
    )

}

export default ItemCount