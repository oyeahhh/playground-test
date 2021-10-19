export const ERROR_MESSAGES = {};

class WidgetSandbox {
  widthFunction: Function;

  constructor(widthFunction: Function) {
    this.widthFunction = widthFunction;
  }
}

export default WidgetSandbox;
