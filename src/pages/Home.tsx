import NavTop from "../components/NavTop/NavTop";
import FilterBar from "../components/FilterBar/FilterBar";
import NavBottom from "../components/NavBottom/NavBottom";
import Articles from "../components/Articles/Articles";

const Home = () => {
  return (
    <>
      <NavTop isPage={true} title="Articles" />
      <FilterBar />
      <Articles />
      <NavBottom />
    </>
  );
};

export default Home;
