import Dropdown from '../components/dropdown';
import YourProductContent from '../components/yourProductContent';

export default function YourPlants(props: any) {
  const listItems: any = [];
  console.log(props.userObject, 'obj');
  const content = props.userObject["userInfo"][0];
  console.log(content);
  let productKeys = Object.keys(content["products"]).flat();
  let productPrices = Object.values(content["products"]).flat();
  let productOwner = content["username"];
  let productImage = content["imageLink"];
  console.log(productKeys, productPrices, productOwner);
  for (var i = 0; i < productKeys.length; i++) {
    listItems.push(<Dropdown idGiven="productsDropdown" title={`${productOwner} - ${productKeys[i]} ${productPrices[i]}`} content={<YourProductContent productimg={Object.values(productImage)[i]}></YourProductContent>}></Dropdown>)
    // listItems.push(<Product key={i} userName={productOwner} productName={productKeys[i]} productPrice={productPrices[i]}></Product>);
  }
  return (
    <div id="yourplants">
    <h1>Your Products - {productOwner}</h1>
      {(!(listItems.length == 0)) ? listItems : <></>}
    </div>
  )
}