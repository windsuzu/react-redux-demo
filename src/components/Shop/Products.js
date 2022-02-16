import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
    {
        id: "p1",
        price: 6,
        title: "First Book",
        description: "This is the first book",
    },
    {
        id: "p2",
        price: 5,
        title: "Second Book",
        description: "This is the second book",
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_DATA.map((item) => (
                    <ProductItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
