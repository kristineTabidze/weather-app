import { memo } from "react";
import LayoutContent from "./LayoutContent";
import { LayoutProps } from "./types";


const Layout = (props: LayoutProps) => {
  return (
    <LayoutContent {...props} />
  );
};

export default memo(Layout);
