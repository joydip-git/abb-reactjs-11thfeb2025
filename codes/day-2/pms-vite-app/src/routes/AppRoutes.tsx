import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
// import Home from "../components/shared/home/Home"
// import ProductList from "../components/products/product-list/ProductList"
// import ProductDetail from "../components/products/product-detail/ProductDetail"
// import AddProduct from "../components/products/add-product/AddProduct"
// import PageNotFound from "../components/shared/page-not-found/PageNotFound"

//Lets you defer loading a component’s code until it is rendered for the first time.
const Home = lazy(() => import('../components/shared/home/Home'))
const ProductList = lazy(() => import('../components/products/product-list/ProductList'))
const ProductDetail = lazy(() => import('../components/products/product-detail/ProductDetail'))
const AddProduct = lazy(() => import('../components/products/add-product/AddProduct'))
const PageNotFound = lazy(() => import('../components/shared/page-not-found/PageNotFound'))


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path="home" />
            <Route element={<Home />} path="" />

            <Route path="products">
                <Route path="" element={<ProductList />} />
                <Route path="view/:id" element={<ProductDetail />} />
                <Route path="add" element={<AddProduct />} />
            </Route>

            <Route element={<PageNotFound />} path="*" />
        </Routes>
    )
}

export default AppRoutes