import Plants from "../Pictures/plants.jpg";
import pots from "../Pictures/pots.jpg";
import tools from "../Pictures/tools.jpeg";
import fertilizers from "../Pictures/fertilizers.jpeg";


const CategoryCard = ({ image, title }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 p-4 w-72">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-green-700">{title}</h3>
      </div>
    );
  };
  
  const CategoriesComponent = () => {
    const categories = [
      {
        title: "Plants",
        image: Plants,
      },
      {
        title: "Designer Pots",
        image: pots,
      },
      {
        title: "Tools",
        image: tools,
      },
      {
        title: "Fertilizers & Pesticides",
        image: fertilizers,
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-10">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} image={category.image} title={category.title} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesComponent;
  