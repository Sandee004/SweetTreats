import { Mail, MapPin, Phone } from "lucide-react";
import FloatingPastry from "./FloatingPastry";
import { Navbar } from "./Navbar";
import { useState } from "react";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [orderDetails, setOrderDetails] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative bg-[url('/your-background-image.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Indulge in Sweet Perfection
          </h1>
          <p className="text-2xl text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Handcrafted pastries and cakes for every occasion
          </p>
          <button
            onClick={toggleModal}
            className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            Order Now
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded mb-3 focus:outline-red-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <textarea
                placeholder="Describe your order..."
                className="w-full p-3 border rounded mb-3 focus:outline-red-600"
                rows={4}
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
              ></textarea>

              <div className="flex justify-between">
                <button
                  onClick={toggleModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert(`Order placed by ${name}: ${orderDetails}`);
                    toggleModal();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        )}

        <FloatingPastry className="top-[10%] left-[15%]" type="donut" />
        <FloatingPastry className="top-[20%] right-[10%]" type="cupcake" />
        <FloatingPastry className="bottom-[15%] left-[25%]" type="croissant" />
        <FloatingPastry className="bottom-[20%] right-[30%]" type="pretzel" />
        <FloatingPastry className="top-[5%] left-[70%]" type="cookie" />
        <FloatingPastry className="top-[35%] right-[60%]" type="donut" />
        <FloatingPastry className="bottom-[5%] left-[50%]" type="cookie" />
        <FloatingPastry className="bottom-[30%] right-[5%]" type="cupcake" />
      </section>

      <section id="products" className="py-24 bg-gray-100 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Our Featured Delights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Classic Red Velvet",
                imageUrl:
                  "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg",
              },
              {
                name: "Strawberry Shortcake",
                imageUrl:
                  "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg",
              },
              {
                name: "Chocolate Dream",
                imageUrl:
                  "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
              },
              {
                name: "Cookies & Cream Bliss",
                imageUrl:
                  "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg",
              },
              {
                name: "Lemon Raspberry Zest",
                imageUrl:
                  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg",
              },
              {
                name: "Salted Caramel Indulgence",
                imageUrl:
                  "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg",
              },
              {
                name: "Mocha Fudge Temptation",
                imageUrl:
                  "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
              },
              {
                name: "Mango Passionfruit Delight",
                imageUrl:
                  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg",
              },
              {
                name: "Peanut Butter Swirl",
                imageUrl:
                  "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
              },
              {
                name: "Tiramisu Elegance",
                imageUrl:
                  "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
              },
              {
                name: "Almond Honey Drizzle",
                imageUrl:
                  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 p-6 text-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold text-red-600 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700">
                  Delicious and freshly baked every day
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-red-600 text-white py-24 animate-fade-in"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Sweet Delights</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            At Sweet Delights, we believe every day deserves a little sweetness.
            Our passion lies in crafting irresistible pastries and cakes that
            bring joy with every bite. Using only the finest ingredients, we
            blend tradition with creativity to offer treats that are as
            beautiful as they are delicious.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-gray-200 py-14 text-gray-800 animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Sweet Delights
              </h3>
              <p>Bringing sweetness to your life, one bite at a time.</p>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Contact Us
              </h3>
              <ul>
                <li className="flex items-center mb-2">
                  <Phone size={20} className="mr-2 text-red-600" /> (123)
                  456-7890
                </li>
                <li className="flex items-center mb-2">
                  <Mail size={20} className="mr-2 text-red-600" />{" "}
                  info@sweetdelights.com
                </li>
                <li className="flex items-center">
                  <MapPin size={20} className="mr-2 text-red-600" /> 123 Bakery
                  St, Sweet City
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-red-600 hover:text-red-700">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-red-600 hover:text-red-700">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-red-600 hover:text-red-700">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Intro;
