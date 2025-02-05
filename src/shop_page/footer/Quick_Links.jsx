import Title_Sidebar from "../prduct_list/sidebar/Title_Sidebar";
import { quick_links } from "./data";

const Quick_Links = () => {
  return (
    <section className="flex flex-col gap-3">
      <Title_Sidebar text_color={"#FFFFFF"} title={"Quick links"} />

      <div className="flex flex-col gap-1.5">
        <ul className="flex flex-col gap-1.5">
          {quick_links.map((category) => (
            <li
              key={category.id}
              className={` hover:text-white hover:cursor-pointer  py-1.5`}
            >
              <div>{category.item}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Quick_Links;
