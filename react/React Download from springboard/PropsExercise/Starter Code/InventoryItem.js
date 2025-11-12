function InventoryItem(props) {
  return (
    <div>
      {props.name.map((item) => {
        // define your alert message using normal JS first
        let lowStockMessage = "";
        if (item.quantity <= 5) {
          lowStockMessage = `⚠️ Low stock: ${item.quantity} remaining.`;
        }

        return (
          <div key={item.name}>
            <h2>
              {item.name} ({item.type})
            </h2>
            <p>
              Quantity: {item.quantity} &nbsp; Price: ${item.price}
            </p>

            {/* ✅ Conditional render */}
            {lowStockMessage && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {lowStockMessage}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
