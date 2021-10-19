export const ERROR_MESSAGES = {
  mustBeCalledWithNew: "WidgetSandbox 함수는 반드시 new로 호출해야 합니다",
  fcnMustBeProvided: "위젯 함수는 필수 입력 항목입니다.",
};

function WidgetSandboxJs(widthFunction) {
  // this: new로 생성하지 않으면 undefined / new로 생성하면 { }
  if (!(this instanceof WidgetSandboxJs)) {
    throw new Error(ERROR_MESSAGES.mustBeCalledWithNew);
  }

  if (typeof widthFunction !== "function") {
    throw new Error(ERROR_MESSAGES.fcnMustBeProvided);
  }

  // this: { }
  this.widthFunction = widthFunction; // widthFunction를 인자로 직접 받거나 arguments[0]로 접근할 수 있다.
  // this: { widthFunction: function }
}

export default WidgetSandboxJs;
