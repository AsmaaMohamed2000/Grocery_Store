import React from "react";
import Banner from "../Banner/Banner";
import productList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
function CategoryPage(props) {
  const filtered = productList.filter((itm) => {
    return props.categories.includes(itm.category);
  });

  const renderCategory = filtered.map((item) => {
    return (
      <Cards
        key={item.id}
        id={item.id}
        src={item.image}
        title={item.name}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Banner title={props.title} src={props.src} />
      <div className="mt-12 cardItems  max-w-[80%] mb-14  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 md:gap-y-12 md:gap-x-6 gap-7 gap-y-10 md:max-w-[90%] mx-auto">
        {renderCategory}
      </div>
    </div>
  );
}

export default CategoryPage;
