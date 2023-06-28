import Title from "./Title";
import ItemListContainer from "../containers/ItemListContainer";
import "../scss/title.scss";

const Home = () => {
  return (
    <>
      <section className="mb-5 inicio">
        <div className="vh-100 title12 text-center">
          <Title title="" subtitle="" textDescription="" />
        </div>
      </section>
      <section className="mb-5">
        <h3 className="text-center text-uppercase my-3">Tienda online</h3>
        <ItemListContainer />
      </section>
    </>
  );
};

export default Home;
