import Title from "../../../product_page/Title";
import Title_Side_Button from "../Title_Side_Button";

const Title_Bar = ({ title, btn_title, ...props }) => {
  // console.log("maxCards", maxCards);

  return (
    <section className=" flex justify-between items-center py-2 px-6">
      <span className="uppercase">
        <Title title={title} key={title} />
      </span>
      <span className="text-[#FA8232]" >
        <Title_Side_Button title={btn_title} key={"add_card"} {...props}/>
      </span>
    </section>
  );
};

export default Title_Bar;
