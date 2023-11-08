import { useRef, useState } from "react";
import { View, DrawerLayoutAndroid, StatusBar } from "react-native";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";
import ProfilBem from "./screens/profilBem";
import ProfilDPM from "./screens/profilDPM";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="ProfilDPM" onPress={() => changePage(drawer, "profilDPM")} />
      <Separator height={30} />
      <Button text="ProfilBem" onPress={() => changePage(drawer, "profilBem")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : page == "profilDPM" ? <ProfilDPM /> : page == "profilBem" ? <ProfilBem /> : null}
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;