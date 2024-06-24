
import Single from '../../components/single/Single'
import { singleProduct } from '../../data';
// type Props={
//   id:number;
//   img?:string;
//   title:string;
//   info:Object;
//   chart?:{
//     dataKeys:{
//       name:string ;
//        color:string
//     }[];
//     data:Object[];
//   }
//   activities?:{time:string ; text:string}[];
// };

const Product = () => {
  return (
    <div className='SingleProduct'>
      <Single  {...singleProduct}/>
    </div>
  )
}

export default Product
