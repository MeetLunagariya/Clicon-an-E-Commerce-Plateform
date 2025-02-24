import Title from "../../../product_page/Title";
import Title_Side_Button from "../Title_Side_Button";
import { useDispatch, useSelector } from "react-redux";
import { showApplicationForm } from "../../../Store/payment_cardSlice";
import { addNotification } from "../../../Store/notificationSlice";
const Title_Bar = () => {
  const { maxCards } = useSelector((state) => state.card);
  // console.log("maxCards", maxCards);
  const dispatch = useDispatch();
  return (
    <section className=" flex justify-between items-center py-2 px-6">
      <span className="uppercase">
        <Title title={"payment option"} key={"payment_option"} />
      </span>
      <span className="text-[#FA8232]">
        <Title_Side_Button
          title={"Add Card"}
          key={"add_card"}
          onClick={() =>
            dispatch(
              maxCards >= 3
                ? addNotification({ text: `You can only have 3 cards` })
                : showApplicationForm()
            )
          }
        />
      </span>
    </section>
  );
};

export default Title_Bar;
