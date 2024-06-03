import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";

const Home = () => {
  return (
    <>
      <NavTop isPage={true} title="Articles" />
      <NavBottom />
    </>
  );
};

export default Home;
