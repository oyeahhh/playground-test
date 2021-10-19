import WidgetSandboxJs from "./sandbox_pattern/WidgetSandboxJs";

const Main = () => {
  const func = () => {
    console.log("func");
  };
  const widgetSandbox = new WidgetSandboxJs(func);

  return <div>MainJs</div>;
};

export default Main;
