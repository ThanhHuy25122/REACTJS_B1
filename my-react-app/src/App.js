// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <>
        {/* Header*/}
        <Header />

        {/* Page Content*/}
        <Body />
        {/* Footer*/}
        <Footer />
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
        <div
          id="eJOY__extension_root"
          className="eJOY__extension_root_class"
          style={{ all: "unset" }}
          data-dashlane-observed="true"
        />
      </>
    </>
  );
}

export default App;
