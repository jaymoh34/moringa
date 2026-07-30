function ItemCard (){
    const description =
    "a powerful, full-body cardio workout that improves agility, burns calories, and builds bone strength using a simple handheld rope.";
    const amount ="KES 2,000";

    //react application : primitive datatypes<strings,boolean,numbers>

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            border: "2px solid rgba(0, 0, 0 ,0.1)",
            padding: "2px 4px 2px 4px",
        }}>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <img 
                  width={"200px"}
                src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlc4p_PX6Gy5ZuSWgUIvPDR8p9Qt8iq-tjJiY871R6Yh3h3rW4Sj60_zZvcFAEaXowtdRDf4ZPOvp7WynB1OZVrbpmJMMjSCnJkJ9xfMmP&s=10" />;
            </div>
            <div style={{ textAlign: "left", fontSize: "10px"}}>{description}</div>
            <div style={{ fontSize: "20px"}}>{amount}</div>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <button
            style={{
                border: "2px solid rgba(0, 0, 0, 0.1)",
                padding: "2px 4px 2px 4px",
                color: "white",
                backgroundColor: "orange"
            }}
            >
                Add to cart
            </button>
        </div>
        </div>
    );
}

export default ItemCard;