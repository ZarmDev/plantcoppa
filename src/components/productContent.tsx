
export default function ProductContent(props: any) {
  // <Product key={count} unique={count} userName={productOwners[i]} productName={productKeys[i][z]} productPrice={productPrices[i][z]} addToCartCB={(num : number) => {props.buyAProductCB(num)}} deleteProduct={(num : number) => {props.deleteAProductCB(num)}}></Product>
  function deleteProduct() {
    props.deleteResult(props.unique)
  }
  function addToCart() {
    props.addToCartResult(props.unique)
  }
  return (
    <div>
      <img src={props.productimg}></img> <br></br>
      <button className="buyProduct" onClick={() => {addToCart()}}>Buy Product?</button>
      <button className="deleteProduct" onClick={() => {deleteProduct()}}>Delete Product?</button>
    </div>
  )
}