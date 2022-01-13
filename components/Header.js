import { useWindowSize, useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header({ title }) {
  const width = useWindowWidth();
  console.log("master header!");

  return width > 840 ? <DesktopHeader title={title} /> : <MobileHeader title={title} />;
}

export default Header;
