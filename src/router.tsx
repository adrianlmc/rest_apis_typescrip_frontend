import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader, action as updateAvailabilityAction} from "./Views/Products";
import NewProduct, {action as newProducAction} from "./Views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./Views/EditProduct";
import { action  as deleteProductAction} from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                // seteamos que la vista de products sea la principal
                index:true, 
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProducAction
            },
            {
                path:'productos/:id/editar', //ROA PATTERN
                element:<EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar', //ROA PATTERN
                action: deleteProductAction
            }

        ]
    }
])