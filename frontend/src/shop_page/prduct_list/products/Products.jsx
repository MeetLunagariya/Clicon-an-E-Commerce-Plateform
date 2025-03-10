import { useRef, useState } from "react";
import Filter_Bar from "./Filter_Bar";
import Footer from "./Footer";
import Product_Area from "./Product_Area";
import Search_Bar from "./Search_Bar";
import { products } from "./productData";

const PAGE_SIZE = 20;

const Products = () => {
  const currentPage = useRef(0);
  const [start_end, setStart_End] = useState({ start: 0, end: PAGE_SIZE });

  const handlePageChange = (page) => {
    currentPage.current = page;
    setStart_End({ start: page * PAGE_SIZE, end: (page + 1) * PAGE_SIZE });
  };

  const handlePrevious = () => {
    if (currentPage.current === 0) currentPage.current = 0;
    else {
      currentPage.current = currentPage.current - 1;
      setStart_End({
        start: currentPage.current * PAGE_SIZE,
        end: (currentPage.current + 1) * PAGE_SIZE,
      });
    }
  };

  const handleNext = () => {
    if (currentPage.current === Math.ceil(products.length / PAGE_SIZE) - 1)
      currentPage.current = Math.ceil(products.length / PAGE_SIZE) - 1;
    else {
      currentPage.current = currentPage.current + 1;

      setStart_End({
        start: currentPage.current * PAGE_SIZE,
        end: (currentPage.current + 1) * PAGE_SIZE,
      });
    }
  };

  // console.log("Page : " + currentPage.current);
  // console.log("start : " + start_end.start + " end : " + start_end.end);
  return (
    <div className="w-full flex flex-col gap-3">
      <Search_Bar />
      <Filter_Bar />
      <Product_Area start_end={start_end} PAGE_SIZE={PAGE_SIZE}/>
      <Footer
        start_end={start_end}
        handlePageChange={handlePageChange}
        currentPage={currentPage.current}
        PAGE_SIZE={PAGE_SIZE}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Products;
