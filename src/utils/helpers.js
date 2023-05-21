export const formatPrice = (price) => {
  const formatedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return formatedPrice;
};

export const getUniqueValues = (products, type) => {
  let unique = products.map((product) => product[type]);

  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
