import Header from "./components/Header";
import Item from "./components/Item";
import "./App.css";

import Accessories from "./assets/Desktop-Accessories.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_itemsContainer">
        <Item
          title="Model S"
          desc="Order Online Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model Y"
          desc="Order Online Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model X"
          desc="Order Online Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Lowest Cost Pannels in America"
          desc="Money-back gurantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
          first
        />

        <Item
          title="Solar Roof"
          desc="Money-back gurantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
