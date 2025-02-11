import ProductList from "../products/product-list/ProductList";
import DashBoard from "../shared/dashboard/DashBoard";

export function App() {
  return (
    <div>
      <DashBoard />
      <br />
      <div className="container container-fluid">
        <ProductList />
      </div>
    </div>
  )
}