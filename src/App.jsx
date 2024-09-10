import "./index.css";
import Signup from "./components/sign_up/Signup";
import Account from "./components/sign_up/Accountchois";
import AddunlinkedAcount from "./components/sign_up/UnlinkedAccount";
import Dashbord from "./components/home/dashbord";
import LinkedAccount from "./components/LinkedAccount";

function App() {
  return (
    <>
      <div className="flex ">
        <Dashbord />
      </div>
    </>
  );
}
export default App;
