import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, isGridView } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry there is no product matching your searching...
      </h5>
    );
  }

  return (
    <div>
      {isGridView && <GridView products={products} />}
      {!isGridView && <ListView products={products} />}
    </div>
  );
};

export default ProductList;
