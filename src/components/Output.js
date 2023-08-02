import React from "react";

function Output({ bill, totalBill, tip }) {
  return (
    <h3>
      You pay ${totalBill} (${bill} + ${tip} tip)
    </h3>
  );
}

export default Output;
