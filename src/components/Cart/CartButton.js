import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const cartTotal = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleHandler = (e) => {
        dispatch(uiActions.toggle());
    };
    return (
        <button className={classes.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotal}</span>
        </button>
    );
};

export default CartButton;
