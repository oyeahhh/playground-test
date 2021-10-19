import { FC } from "react";
import WidgetSandboxTs from "./sandbox_pattern/WidgetSandboxTs";

const Main: FC = () => {
  const func = () => {
    console.log("func");
  };
  const widgetSandbox = new WidgetSandboxTs(func);

  return <div>MainTs</div>;
};

export default Main;
