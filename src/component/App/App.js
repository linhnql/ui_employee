import "./App.css";
import Routes from "../../router/routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          <Routes />
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
