import Header from "./components/header/Header";
import MainLayout from "./components/main-layout/MainLayout";
import Provider from "./provider/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <MainLayout/>
    </Provider>
  );
}

export default App;
