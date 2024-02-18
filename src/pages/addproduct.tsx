import { fetchData, getUserInfo} from '../databaseFeatures/apiInteraction'

export default function AddProduct(props: any) {
  async function addProduct() {
    let user = await getUserInfo();
    let productName = document.querySelector('[name*="name"]').value
    let productPrice = document.querySelector('[name*="price"]').value
    let productImage = document.querySelector('[name*="image"]').value
    console.log(productName, productPrice);
    // stackoverflow: https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable

    const obj = {
        [productName]: productPrice,
    }
    const obj2 = {
        [productImage]: productImage,
    }
    let data = {
      username: user.name,
      products: obj,
      imageLink: obj2
      };
    fetchData("POST", "addproduct", JSON.stringify(data))
    props.resetFunc()
    // document.querySelectorAll('[your-attribute="your-value"]');
  }

  return (
    <div id="addproductpage">
      <h1>Add a product</h1>
      <p id="small">Press any button on the navbar to go back</p>
      <label htmlFor="name">Product Name: </label>
      <input name="name" type="text" placeholder="ex: Basil Plant"></input> <br></br>
      <label htmlFor="price">Product Price: </label>
      <input name="price" type="text" placeholder='YOU MUST add $ before the money'></input> <br></br>
      <label htmlFor="image">Product Image (Link): </label>
      <input name="image" type="text" placeholder="The link to your image"></input>
      <br></br>
      <button type="submit" onClick={() => {addProduct()}}>Add Product</button>
    </div>
  )
}