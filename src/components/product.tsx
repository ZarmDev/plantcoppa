import Dropdown from '../components/dropdown'

// CAN DELETE, PRODUCT.TSX IS REDUNDANT

export default function Product(props: any) {
  return (
    <Dropdown idGiven="productsDropdown" title={props.productPrice} content={props.productName}></Dropdown>
    // <li key={props.key} className="product">{props.userName} - {props.productName} {props.productPrice} <button onClick={() => {props.addToCartCB(props.unique)}}>Buy?</button><button onClick={() => {props.deleteProduct(props.unique)}}>Delete product?</button></li>
  )
}