function ItemCard(){

    const description = "A versatile fitness tool and toy used by swinging a cord over the head and under the feet.";
    const amount = "KES 2,000";

    /*
        props -> image, description, amount
    */

    return(
        <>
        <div style = {{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            border: "2px solid rgba(0, 0, 0, 0.4)",
            padding: "2px 4px 2px 4px",
            margin: "10px",
        }}>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}> 
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWBb8RKMiA4Ub9ovHzVEQt8D1cg1YChDCCOqN8vvnHQ&s=10" 
                alt="Image Not Found" 
                style={{width: "150px"}}/>
            </div>
            <div style={{
                textAlign: "left",
                fontSize: "10px",
            }}>{description}</div>
            <div style={{
                fontSize: "20px",
            }}>{amount}</div>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <button style={{
                    border: "2px solid rgba(0, 0, 0, 0.1)",
                    padding: "2px 4px 2px 4px",
                    color: "white",
                    backgroundColor: "orange",
                }}>Add to cart</button>
            </div>
        </div>
        </>
    );
}

export default ItemCard;