import Popular_Tags from "../prduct_list/sidebar/Popular_Tags";
import App_Download from "./App_Download";
import Category from "./Category";
import Details from "./Details";
import Quick_Links from "./Quick_Links";

const Index_Footer = () => {
  return (
    <div className="text-[#ADB7BC] bg-[#191C1F]">
      <div className="flex flex-col">
        <div className="container mx-auto py-20">
          <div className="px-4 flex justify-between">
            <Details />
            <Category />
            <Quick_Links />
            <App_Download />
            <Popular_Tags
              text_color={"#FFFFFF"}
              selected_text_color={"#FFFFFF"}
              selected_border={"#FFFFFF"}
              selected_bg={"#303639"}
              border={"#303639"}
            />
          </div>
        </div>
        <div className="shadow-[inset_0_1px_0_0_#303639] px-4">
          <div className="container mx-auto text-sm py-6 text-center">
            Kinbo - eCommerce Template © 2021. Design by Templatecookie
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index_Footer;
