import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { cartActions } from "./store/cart-slice";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
    const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    // fetch data from server
    useEffect(() => {
        fetch("https://test-e9746-default-rtdb.firebaseio.com/cart.json")
            .then((res) => {
                if (!res.ok) throw new Error("Fetching cart data failed.");
                return res.json();
            })
            .then((data) => {
                dispatch(cartActions.replaceCart(data));
            })
            .catch((err) =>
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Error!",
                        message: err.message,
                    })
                )
            );
    }, [dispatch]);

    // update data to server
    useEffect(() => {
        if (!isInitial) {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending Cart Data...",
                })
            );

            fetch("https://test-e9746-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart),
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Sending cart data failed.");
                    return res.json();
                })
                .then((data) =>
                    dispatch(
                        uiActions.showNotification({
                            status: "success",
                            title: "Success!",
                            message: "Sent cart data Successfully!",
                        })
                    )
                )
                .catch((err) =>
                    dispatch(
                        uiActions.showNotification({
                            status: "error",
                            title: "Error!",
                            message: err.message,
                        })
                    )
                );
        }

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
