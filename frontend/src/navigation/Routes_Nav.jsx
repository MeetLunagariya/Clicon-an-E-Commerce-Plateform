import { CaretRight, House } from "../assets/svg";
import { useLocation } from "react-router-dom";

const Routes_Nav = () => {
  const location = useLocation();
  // console.log("location", location);
  const pathSegments = location.pathname.split("/").filter(Boolean);
  // console.log("pathSegments", pathSegments);
  const breadcrumbSegments = ["Home", "UserAccount", ...pathSegments];

  return (
    <div className="flex gap-[8px] h-[72px] bg-[#F2F4F5] px-4">
      <span className="my-auto">
        <House />
      </span>
      {breadcrumbSegments.map((segment, index) => (
        <span key={index} className="flex items-center">
          <button
            className={`${
              index !== breadcrumbSegments.length - 1
                ? "text-[#5F6C72]"
                : "text-[#2DA5F3]"
            } my-auto`}
          >
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </button>
          {index !== breadcrumbSegments.length - 1 && (
            <span className="my-auto">
              <CaretRight />
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Routes_Nav;
