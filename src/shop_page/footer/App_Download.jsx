import React from "react";
import Download from "./Download";
import { App_store, Play_store } from "../../assets/svg";
import Title_Sidebar from "../prduct_list/sidebar/Title_Sidebar";

const App_Download = () => {
  return (
    <section className="flex flex-col gap-3">
      <Title_Sidebar text_color={"#FFFFFF"} title={"Download APP"} />

      <Download logo={<Play_store />} title={"Google Play"} />
      <Download logo={<App_store />} title={"App Store"} />
    </section>
  );
};

export default App_Download;
