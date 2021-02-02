import Header from "./components/Header";
import Item from "./components/Item";
// import "./App.css";

import Accessories from "./assets/Desktop-Accessories.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item
          title="Lowest Cost Pannels in America"
          desc="Money-back gurantee"
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          backgroundImg={ModelS}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model 3"
          desc="Money-back gurantee"
          backgroundImg={Model3}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model X"
          desc="Money-back gurantee"
          backgroundImg={ModelX}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Model Y"
          desc="Money-back gurantee"
          backgroundImg={ModelY}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Solar Roof"
          desc="Money-back gurantee"
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoBottons="true"
        />
        <Item
          title="Accessories"
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
