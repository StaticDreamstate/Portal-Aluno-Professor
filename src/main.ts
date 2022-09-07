import App from "./infra/App";

const instanceOf = new App();

instanceOf.setup({ test: false, port: 5000 });
