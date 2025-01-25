import AccountNavbar from "../userAccount/AccountNavbar";

// eslint-disable-next-line react/prop-types
const FormUI = ({ children }) => {
  return (
    <>
        <div className=" rounded-md border border-gray-200 min-w-[424px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">
          <AccountNavbar/>
          {children}
        </div>
    </>
  );
};

export default FormUI;
