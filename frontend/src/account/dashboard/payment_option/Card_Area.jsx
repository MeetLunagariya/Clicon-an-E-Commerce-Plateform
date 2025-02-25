import { useDispatch, useSelector } from "react-redux";
import { Copy, DotsThree } from "../../../assets/svg";
import { addNotification } from "../../../Store/notificationSlice";
import Card_Number from "./Card_Number";
import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Card_Area = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.card);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);
  const formatBalance = (balance) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(balance);
  };

  // to disable dropdown on outside Click 
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="border-t border-gray-200 px-6 py-4">
      <ul className="flex gap-6">
        {cards.map((card) => (
          <li
            key={card.id}
            className={`py-7 px-6 ${
              card.id % 2 !== 0
                ? "bg-[radial-gradient(98.14%_214.97%_at_0%_0%,_#1B6392_0%,_#124261_80%)]"
                : "bg-[radial-gradient(98.14%_214.97%_at_0%_0%,_#248E1D_0%,_#2DB324_100%)]"
            } text-white rounded-lg min-w-[296px] min-h-[196px] flex flex-col justify-between`}
          >
            <div className="flex justify-between">
              <div className="text-xl">
                <span className="font-medium">
                  ${formatBalance(card.balance)}
                </span>{" "}
                USD
              </div>
              <div className="relative" ref={selectRef}>
                <button
                  className={`${
                    activeDropdown === card.id
                      ? "text-gray-100"
                      : "text-gray-300"
                  } hover:text-gray-100`}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === card.id ? null : card.id
                    )
                  }
                >
                  <DotsThree />
                </button>

                {activeDropdown === card.id && (
                  <div ref={dropdownRef}>
                    <Dropdown
                      card={card}
                      id={card.id}
                      setActiveDropdown={setActiveDropdown}
                      dispatch={dispatch}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-100 text-sm font-medium uppercase">
                Card Number
              </div>
              <div className="flex gap-1 ">
                <span className="text-">
                  <Card_Number cardNumber={card.number} />
                </span>
                <button
                  className="text-gray-300 hover:text-gray-100"
                  onClick={() => {
                    navigator.clipboard.writeText(card.number);
                    dispatch(
                      addNotification({
                        id: Date.now(),
                        text: "Text Copied",
                      })
                    );
                  }}
                >
                  <Copy />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 flex justify-center items-center">
                <img src={card.type} alt="img" />
              </div>
              <div>{card.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Card_Area;
