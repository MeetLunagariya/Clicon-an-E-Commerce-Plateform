/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { X } from "lucide-react";
import {
  addCard,
  setIsUpdate,
  showApplicationForm,
  updateCard,
} from "../../../Store/payment_cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { mastercard, visa } from "../../../assets/img";
import { useEffect } from "react";

const schema = yup
  .object({
    cardType: yup.string().required("Card type is required"),
    balance: yup
      .number()
      .required("Initial balance is required")
      .min(0, "Balance cannot be negative"),
    cvc: yup
      .string()
      .required("CVC is required")
      .matches(/^\d{3}$/, "CVC must be exactly 3 digits"),
    expiryMonth: yup
      .string()
      .required("Expiry month is required")
      .matches(/^(0[1-9]|1[0-2])$/, "Invalid month format"),
    expiryYear: yup
      .string()
      .required("Expiry year is required")
      .matches(/^(20)\d{2}$/, "Invalid year format"),
  })
  .required();

const Card_Form = ({ selectedCard }) => {
  const dispatch = useDispatch();
  const { cards, isUpdate } = useSelector((state) => state.card);
  // console.log("cards", cards);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cardType: selectedCard
        ? selectedCard.type === mastercard
          ? "mastercard"
          : "visa"
        : "",
      balance: selectedCard?.balance || "",
      cvc: selectedCard?.cvc || "",
      expiryMonth: selectedCard?.expiryMonth || "",
      expiryYear: selectedCard?.expiryYear || "",
    },
  });

  useEffect(() => {
    if (selectedCard) {
      setValue(
        "cardType",
        selectedCard.type === mastercard ? "mastercard" : "visa"
      );
      setValue("balance", selectedCard.balance);
      setValue("cvc", selectedCard.cvc);
      setValue("expiryMonth", selectedCard.expiryMonth);
      setValue("expiryYear", selectedCard.expiryYear);
    }
  }, [selectedCard, setValue]);

  const onSubmit = async (data) => {
    try {
      let newId;
      if (!isUpdate) {
        newId =
          cards.length > 0 ? Math.max(...cards.map((card) => card.id)) + 1 : 1;
      }

      const generateCardNumber = () => {
        return `${Math.random().toString().slice(2, 6)} ${Math.random()
          .toString()
          .slice(2, 6)} ${Math.random().toString().slice(2, 6)} ${Math.random()
          .toString()
          .slice(2, 6)}`;
      };

      const newCard = {
        id: isUpdate ? selectedCard.id : newId,
        number: isUpdate ? selectedCard.number : generateCardNumber(),
        name: "Kevin Gilbert",
        expiryMonth: data.expiryMonth,
        expiryYear: data.expiryYear,
        cvc: data.cvc,
        balance: parseFloat(data.balance),
        type: data.cardType === "mastercard" ? mastercard : visa,
      };

      if (isUpdate) {
        dispatch(updateCard({ id: selectedCard.id, updatedCard: newCard }));
      } else {
        dispatch(addCard(newCard));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 top-24 pt-16 lg:mt-0 lg:top-0 font-sans flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white/95 rounded-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={() => {
            dispatch(showApplicationForm());
            isUpdate && dispatch(setIsUpdate(false));
          }}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          {isUpdate ? "Update Card" : "Add Card"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Type *
              </label>
              <select
                {...register("cardType")}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select card type</option>
                <option value="mastercard">Mastercard</option>
                <option value="visa">Visa</option>
              </select>
              {errors.cardType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cardType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Initial Balance *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("balance")}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.balance && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.balance.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC *
              </label>
              <input
                type="text"
                maxLength="3"
                {...register("cvc")}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.cvc && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cvc.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Month *
              </label>
              <input
                type="text"
                placeholder="MM"
                maxLength="2"
                {...register("expiryMonth")}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.expiryMonth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.expiryMonth.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Year *
              </label>
              <input
                type="text"
                placeholder="YYYY"
                maxLength="4"
                {...register("expiryYear")}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.expiryYear && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.expiryYear.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => {
                dispatch(showApplicationForm());
                isUpdate && dispatch(setIsUpdate(false));
              }}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-orange-500 text-white rounded-md font-semibold 
              ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-600"
              } 
              transition-colors duration-300`}
              whileTap={{
                scale: isSubmitting ? 1 : 0.95,
              }}
            >
              {isUpdate
                ? isSubmitting
                  ? "Updating..."
                  : "Update Application"
                : isSubmitting
                ? "Submitting..."
                : "Submit Application"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Card_Form;
