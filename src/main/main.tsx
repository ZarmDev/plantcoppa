import './main.css';
import React, { useState } from 'react';
import Home from '../pages/home';
import FindPlants from '../pages/findplants'
import YourPlants from '../pages/yourplants'
import AddProduct from '../pages/addproduct'
import Cart from '../pages/cart'
import { getUserInfo, fetchData } from '../databaseFeatures/apiInteraction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  // this is to set which button content is being shown
  const [display, setDisplay] = useState("home");
  // this is to set what data you want to show for example products
  const [content, setContent] = useState("");
  // this is the shopping cart data
  const [cart, setCart] = useState([]);

  // React.useEffect(() => {
  //   fetchData('POST', 'adduser', '')
  // }, [])

  function goHome() {
    setDisplay('home')
  }
  
  async function findPlants() {
    const test = await fetchData('POST', 'getallproducts', '').then(response => response.json()).then(data => {
        console.log(data);
        setContent(data)
      });
    setDisplay("findplants")
  }

  async function yourPlants() {
    const test = await fetchData('POST', 'getuser', '').then(response => response.json()).then(data => {
        console.log(data);
        setContent(data)
        setDisplay("yourplants")
      });
  }

  async function addProduct() {
    // Show addproduct page
    setDisplay('addproduct')
  }

  // TODO: localstorage?
  function addToCart(unique : number) {
    // unique is the unique number that the product is on the frontend site
    let originalCart = cart;
    console.log(originalCart, unique);
    var product = document.getElementsByClassName('productsDropdown')[unique].innerText
    // using ▼ as spliter which is terrible practice lol
    console.log(product.indexOf('▲'));
    product = product.slice(0, product.indexOf('▲') - 1);
    console.log(product)
    if (cart.indexOf(product) != -1) {
      toast("You already have this product in your cart...")
      return
    } else {
      toast(`Added ${product} to the shopping cart`)
    }
    // Slice removes the Buy?
    originalCart.push(product)
    setCart(originalCart)
  }

  async function deleteProduct(unique : number) {
    console.log('delete', unique);
    let productName = document.getElementsByClassName('productsDropdown')[unique].innerText;
    productName = productName.slice(0, productName.indexOf('▲') - 1);
    // const productId = req.body.id; // the id of the product to delete
    // const productName = req.body.name;
    let data = {
      products: productName
    };
    console.log(data);
    // since all keys are unique in the database, you can just send the product over to delete in the api
    const test = await fetchData('POST', 'deleteproduct', JSON.stringify(data)).then(response => response.json()).then(async function (databack) {
      console.log(databack);
      await findPlants()
    });
  }

  // async function addProductToPage() {
  //   // reset the page
  //   const test = await fetchData('POST', 'getallproducts').then(response => response.json()).then(data => {
  //     console.log(data);
  //     setContent(data)
  //   });
  //   setDisplay('findplants')
  // }
  
  let contentToDisplay = null;
  
  if (display == "home") {
    contentToDisplay = <Home></Home>;
  } else if (display == "findplants") {
    // I put CB to represent a callback function
    contentToDisplay = <FindPlants buyAProductCB={addToCart} deleteAProductCB={deleteProduct} goToProductPage={addProduct} userObject={content}></FindPlants>;
  } else if (display == "yourplants") {
    contentToDisplay = <YourPlants userObject={content}></YourPlants>;
  } else if (display == "addproduct") {
    contentToDisplay = <AddProduct resetFunc={findPlants}></AddProduct>;
  } else if (display == "viewcart") {
    contentToDisplay = <Cart items={cart} resetFunc={findPlants}></Cart>;
  }
  return (
    <div>
      <div id="navbar">
        <img src="/favicon.png"></img>
        <button onClick={() => { goHome() }}>Home</button>
        <button onClick={() => { findPlants() }}>Find plants</button>
        <button onClick={() => { yourPlants() }}>Your plants</button>
        <img id="shoppingcart" onClick={() => { setDisplay('viewcart') }} src="/assets/shoppingcart.png"></img>
      </div>
      <div id="content">
          {contentToDisplay}
      </div>
      <ToastContainer />
    </div>
  )
}