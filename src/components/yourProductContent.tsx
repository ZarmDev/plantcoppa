
export default function YourProductContent(props: any) {
  // <Product key={count} unique={count} userName={productOwners[i]} productName={productKeys[i][z]} productPrice={productPrices[i][z]} addToCartCB={(num : number) => {props.buyAProductCB(num)}} deleteProduct={(num : number) => {props.deleteAProductCB(num)}}></Product>
  return (
    <div>
      <img src={props.productimg}></img> <br></br>
      <button className="deleteProduct">Delete Product?</button>
    </div>
  )
}