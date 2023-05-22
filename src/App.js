import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./Components/Category";
import Header from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import Cards from "./Components/Cards";
import { items } from "./Components/Data";


const App = () => {
  const [itemsData, setItemsData] = useState(items);
  //get all cat unique
  const categories = ["All", ...new Set(items.map((i) => i.category))];
  //Filter By Category
  const filterByCategories = (cat) => {
    if (cat === "All") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category
          filterByCategories={filterByCategories}
          categories={categories}
        />
        <Cards itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
