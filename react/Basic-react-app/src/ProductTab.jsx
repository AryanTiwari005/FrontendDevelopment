import Product from "./product"
export default function ProductTab(){
    let styles={
        backgroundColor: "#1f1f1f",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px"

    }
    return(
        <div style={styles}>
            <h2>Shop</h2>
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple" idx={1}/>
            <Product title="Zebronics" idx={2}/>
            <Product title="Petronics" idx={3}/>
        </div>
    )
}