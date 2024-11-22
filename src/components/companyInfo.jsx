import React from "react";

const CompanyInfo = () => {
  const company = {
    products: [
      { name: "Bicicletas de carretera", price: "COP9000", image: "https://cdn.mammothbikes.com/blogs/medium/240520_0.jpg" },
      { name: "Bicicletas de montaña", price: "COP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHA_4zFJFOtUz6tRmaHQB92uI0fJJieGzZNg&s" },
      { name: "Bicicletas de gravel.", price: "COP1,200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWChpgCQnx6mA7ftlNtdRyZqk4Vgben1D1sA&s" },

    ],
  };

  return (
    <div className="container mx-auto p-6 bg-whiteDark">
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-6">Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-bold mt-4">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;