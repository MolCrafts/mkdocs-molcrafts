import favicon from "@/assets/favicon.ico";
import { Navbar } from "@/components/navbar";
import { Helmet } from "react-helmet";
import "./App.css";

const DefaultFavIcon = () => {
  return (
    <Helmet>
      <link rel="icon" href={favicon} />,
    </Helmet>
  );
};

const App = () => {
  return (
    <>
      <DefaultFavIcon />
      <Navbar />
    </>
  );
};

export default App;
