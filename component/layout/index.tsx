import React from "react";

import { ILayoutProps } from "../../types/types";
import Navbar from "../navbar/index";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default React.memo(Layout);
