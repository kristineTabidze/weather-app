import { Alert } from "antd";
import classNames from "classnames";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import MetaData from "./MetaData";
import { LayoutProps } from "./types";

const MESSAGE_TEXT = "This is code challenge";

const LayoutContent = ({
  className,
  hasHeader = true,
  hasFooter = true,
  metaData,
  children,
  hasInformationalAlert = false,
}: LayoutProps) => {
  return (
    <>
      <MetaData {...metaData} />

      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex flex-col grow">
          {hasInformationalAlert && (
            <Alert banner closable type="info" message={MESSAGE_TEXT} />
          )}

          {hasHeader && <Header />}

          <main className={classNames("main flex flex-col grow", className)}>
            {children}
          </main>
        </div>

        {hasFooter && <Footer />}
      </div>
    </>
  );
};

export default LayoutContent;
