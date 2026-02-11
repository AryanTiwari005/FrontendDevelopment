
export default function Price({oldPrices,NewPrices}){
    let oldPriceStyle={
        textDecoration: "line-through",
        color: "red"
    }
    let newPriceStyle={
        fontWeight: "bold",
        color: "green"
    }
    let styles = {
        backgroundColor: "#e0c367",
        padding: "5px",
        borderRadius: "5px",
        height: "50px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return(<div style={styles}>
        <span style={oldPriceStyle}>{oldPrices}</span>
        &nbsp;
        <span style={newPriceStyle}>{NewPrices}</span>
    </div>

    )
}