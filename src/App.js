import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-action";

let isInitial = true;

function App() {
    const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    // fetch data from server
    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    // update data to server
    useEffect(() => {
        if (!isInitial) {
            dispatch(sendCartData(cart));
        }
        // prevent sending data again after fetching data
        if (!(cart.items.length === 0 && isInitial)) isInitial = false;
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {isCartVisible && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
