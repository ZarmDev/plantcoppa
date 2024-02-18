import Product from '../components/product';
import Dropdown from '../components/dropdown';
import ProductContent from '../components/productContent';

export default function FindPlants(props: any) {
  function addProduct() {
    props.goToProductPage()
  }
  
  const listItems: any = [];
  const content = props.userObject;
  console.log(content);
  if (content != '') {
    let productKeys = content["productKeys"];
    let productPrices = content["productPrices"];
    let productOwners = content["productOwners"];
    // TODO: Filter out your own username because you can't buy your own stuff
    let count = 0;
    for (var i = 0; i < productKeys.length; i++) {
      for (var z = 0; z < productKeys[i].length; z++) {
        let productImages = content["productImages"];
        let productImage = 'not found';
        if (productImages[i] != null) {
          // console.log(productImages[i])
          productImage = Object.values(productImages[i])[z];
        }
        listItems.push(<Dropdown idGiven="productsDropdown" title={`${productOwners[i].join('')} - ${productKeys[i][z]} ${productPrices[i][z]}`} content={<ProductContent unique={count} deleteResult={(unique : any) => {props.deleteAProductCB(unique)}} addToCartResult={(unique : any) => {props.buyAProductCB(unique)}} productimg={productImage}></ProductContent>}></Dropdown>)
        // listItems.push(<Product key={count} unique={count} userName={productOwners[i]} productName={productKeys[i][z]} productPrice={productPrices[i][z]} addToCartCB={(num : number) => {props.buyAProductCB(num)}} deleteProduct={(num : number) => {props.deleteAProductCB(num)}}></Product>);
        count++;
      }
    }
  }
  
  return (
    <div id="findplants">
      {/* TODO: Add filter option */}
      <button id="addproduct" onClick={() => { addProduct() }}>Add a product</button>
      <Dropdown idGiven="filter" title="Filter" content="..."></Dropdown>
      <ul>
      {listItems}
      </ul>
    </div>
  )
}