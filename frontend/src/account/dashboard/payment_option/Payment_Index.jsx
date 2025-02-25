import Title_Bar from "./Title_Bar";
import Card_Area from "./Card_Area";
import { showApplicationForm } from "../../../Store/payment_cardSlice";
import { addNotification } from "../../../Store/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
const Payment_Index = () => {
  const { maxCards } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return (
    <section className="border border-gray-200 rounded-sm">
      <Title_Bar
        title={"Payment Options"}
        btn_title={"Add Card"}
        onClick={() =>
          dispatch(
            maxCards >= 3
              ? addNotification({ text: `You can only have 3 cards` })
              : showApplicationForm()
          )
        }
      />
      <Card_Area />
    </section>
  );
};

export default Payment_Index;
