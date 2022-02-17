import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return (dispatch) => {
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
    };
};

export const sendCartData = (cart) => {
    return (dispatch) => {
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
    };
};
