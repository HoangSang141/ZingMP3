import icons from "./icons";

const { MdOutlineLibraryMusic, MdOutlineFeed, LuPlayCircle, SiCircle } = icons
export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24}/>
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <LuPlayCircle size={24}/>
  },
  {
    path: "zing-chart",
    text: "#zing-chart",
    icons: <SiCircle size={24}/>
  },
  {
    path: "follow", 
    text: "Theo dõi",
    icons: <MdOutlineFeed size={24}/>
  },
];
