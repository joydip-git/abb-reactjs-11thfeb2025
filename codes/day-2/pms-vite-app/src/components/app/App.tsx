import { useState } from "react";
import ProductList from "../products/product-list/ProductList";
import DashBoard from "../shared/dashboard/DashBoard";

export function App() {
  const [showStatus, updateShowStatus] = useState<boolean>(false)
  const showStatusHandler = () => {
    updateShowStatus(
      (oldValue) => { return !oldValue }
    )
  }
  return (
    <div>
      <DashBoard />
      <br />
      <button type="button" onClick={showStatusHandler}>
        {showStatus ? 'Hide' : 'Show'}
      </button>
      <br />
      <div className="container container-fluid">
        {
          /**if -> && */
          /*showStatus && (<ProductList />)*/

          /**if else ->ternary operator */
          showStatus ? <ProductList /> : <span>NA</span>
        }
      </div>
    </div>
  )
}