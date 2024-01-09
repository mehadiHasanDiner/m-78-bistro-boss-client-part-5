import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import caeserSalad from "../../../assets/home/slide5.jpg";

const ChefRecommends = () => {
  const card = (
    <>
      <div className="card card-compact w-full bg-base-300  rounded-none">
        <figure>
          <img className="w-full rounded-none" src={caeserSalad} alt="" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p className="text-center">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-base border-0 border-b-4 border-orange-700 hover:border-yellow-400 text-orange-700 hover:bg-orange-700 hover:text-white ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <section>
      <SectionTitle
        subHeading={"---- Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {card}
        {card}
        {card}
      </div>
    </section>
  );
};

export default ChefRecommends;
