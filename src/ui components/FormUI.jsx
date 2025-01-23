// eslint-disable-next-line react/prop-types
const FormUI = ({ children }) => {
  return (
    <>
        <div className="px-[32px] shadow-lg min-w-[424px] shadow-black/20">
          {children}
        </div>
    </>
  );
};

export default FormUI;
