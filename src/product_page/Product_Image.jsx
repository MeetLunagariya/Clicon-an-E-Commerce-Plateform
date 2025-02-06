import { useState } from "react";
import { macbook_imgs as imgs} from "./productData";
import { ArrowLeft_Productpage, ArrowRight_Productpage } from "../assets/svg";
import Images from "./Images";
const Product_Image = () => {
  

  const [currentImg, setCurrentImg] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      <div className=" border rounded-sm">
        <img
          src={imgs[currentImg-1].img}
          alt=""
          className="object-FILL w-[616px] h-[464px]"
        />
      </div>
      <div className="realtive ">
        <ul className="relative flex justify-between">
          <button
            className={`${currentImg===1 && ""} absolute bg-[#FA8232] h-12 w-12 rounded-full flex items-center justify-center mt-6 -ml-6 border-2 border-white `} 
            disabled={currentImg === 1}
            onClick={() => setCurrentImg(currentImg-1)}
          >
            <ArrowLeft_Productpage />
          </button>
          {imgs.map((img) => (
            <>
              <Images
                img={img}
                currentImg={currentImg}
                setCurrentImg={setCurrentImg}
              />
            </>
          ))}
          <button className="absolute bg-[#FA8232] h-12 w-12 rounded-full flex items-center justify-center mt-6 -ml-6 border-2 border-white right-0 -mr-6"
          disabled={currentImg === imgs.length}
           onClick={() => setCurrentImg(currentImg+1)}>
            <ArrowRight_Productpage />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Product_Image;
