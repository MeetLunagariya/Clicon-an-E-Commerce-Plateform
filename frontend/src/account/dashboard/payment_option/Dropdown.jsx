/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  removeCard,
  setIsUpdate,
  setSelectedCard,
  showApplicationForm,
} from "../../../Store/payment_cardSlice";

const Dropdown = ({ setActiveDropdown, id, card }) => {
  // console.log("id", id);
  const dispatch = useDispatch();

  const handleEditCard = () => {
    // console.log("card", card);
    dispatch(setIsUpdate(true));
    dispatch(setSelectedCard(card));
    dispatch(showApplicationForm());
    setActiveDropdown(null);
  };

  const handleDeleteCard = () => {
    dispatch(removeCard(id));
    setActiveDropdown(null);
  };

  return (
    <div className="absolute left-0 font-medium py-1 min-w-[140px] rounded-md shadow-sm flex flex-col bg-white text-gray-600 z-10">
      <button
        className="px-4 py-2 text-sm hover:text-gray-900 mr-auto "
        onClick={handleEditCard}
      >
        Edit Card
      </button>
      <button
        className="px-4 py-2 text-sm hover:text-red-600 mr-auto"
        onClick={handleDeleteCard}
      >
        Delete Card
      </button>
    </div>
  );
};

export default Dropdown;
