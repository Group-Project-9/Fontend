import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import { store } from "../src/App/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
    <App />
</Provider>
);
