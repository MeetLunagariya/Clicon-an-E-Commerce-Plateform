import { useRef, useState } from "react";
import Title_Bar from "../payment_option/Title_Bar";
import { products } from "../../../shop_page/prduct_list/products/productData";
import Browsing_Data from "./Browsing_Data";
import Footer from "../../../shop_page/prduct_list/products/Footer";

const PAGE_SIZE = 4;
const Browsing_Index = () => {
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

  return (
    <section className="col-span-2 row-span-2 border border-gray-200 rounded-sm">
      <Title_Bar
        btn_title={"View All"}
        title={"browsing history"}
        key={"browsing_history"}
      />
      <section className="uppercase font-medium flex flex-col gap-3 border-t border-b border-gray-200 text-xs font-sans text-gray-700 px-6 py-3 ">
        <ul className="grid grid-cols-3 lg:grid-cols-4 flex-wrap">
          {products
            .slice(start_end.start, start_end.end)
            .map((product, index) => (
              <li key={product.id} className="">
                <Browsing_Data product={product} index={index} />
              </li>
            ))}
        </ul>
        <Footer
          handlePageChange={handlePageChange}
          currentPage={currentPage.current}
          PAGE_SIZE={PAGE_SIZE}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          start_end={start_end}
        />
      </section>
    </section>
  );
};

export default Browsing_Index;
