
export default function Cart(props: any) {
  let listItems = [];
  for (var i = 0; i < props.items.length; i++) {
    listItems.push(<li>{props.items[i]}</li>)
  }
  return (
    <div>
    <h1>Your shopping cart</h1>
    <ul>
      {listItems}
    </ul>
      <button type="submit">Buy Products</button>
    </div>
  )
}