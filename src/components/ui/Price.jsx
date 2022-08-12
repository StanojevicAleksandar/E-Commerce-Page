import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            CHF{originalPrice.toFixed(2)}
          </span>
          CHF{salePrice.toFixed(2)}
        </>
      ) : (
        <>CHF {originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
