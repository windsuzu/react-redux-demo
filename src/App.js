import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartActions } from "./store/cart-slice";

let isInitial = true;

function App() {
    const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        fetch("https://test-e9746-default-rtdb.firebaseio.com/cart.json")
            .then((res) => res.json())
            .then((data) => {
                dispatch(cartActions.replaceCart(data));
            });
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        fetch("https://test-e9746-default-rtdb.firebaseio.com/cart.json", {
            method: "PUT",
            body: JSON.stringify(cart),
        });
    }, [cart]);

    return (
        <Layout>
            {isCartVisible && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
