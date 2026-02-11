import './product.css'
import Price from './price'
 function Product({title,idx}){
   let oldPrices = ["12,400","31000","50000","10000"];
   let NewPrices = ["12,500","31200","51000","10500"]
      let description = [["8K DPI","5 programmable buttons"],["intuituve surface","designed for ipad pro"],["designed for iPad Pro","intuitive surface"],["wireless","optical orientation"]];
    return(
      <div className="Product" >
         <h4>{title}</h4>
         <p>{description[idx][0]}</p>
          <p>{description[idx][1]}</p>
        
        <Price oldPrices={oldPrices[idx]} 
        
         NewPrices={NewPrices[idx]}/>
         
      </div>
    )
 
   }
export default Product