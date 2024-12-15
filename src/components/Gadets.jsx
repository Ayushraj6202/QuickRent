const Gadets = ()=>{
    const gadgets = [
        {
          name: 'Laptop',
          price: '$25/day',
          features: ['Intel i7', '16GB RAM', '512GB SSD'],
          link : 'https://i.pcmag.com/imagery/reviews/07f8FmuWzIKHir2YRAXsK7G-1.fit_lim.size_919x518.v1716757237.jpg',
        },
        {
          name: 'Camera',
          price: '$15/day',
          features: ['4K Video', '24MP', 'Optical Zoom'],
          link:'https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1673257844/Hamstech%20App/Title-Image-4_80470975421c3/Title-Image-4_80470975421c3.jpg?_i=AA',
        },
        {
          name: 'Gaming Console',
          price: '$20/day',
          features: ['4K HDR', 'Wireless Controllers', 'VR Support'],
          link:'https://rukminim2.flixcart.com/image/850/1000/xif0q/code-in-the-box-game/l/m/r/psp-s10-handheld-console-2-4-inch-screen-game-controller-design-original-imaguwbnw9tyryqq.jpeg?q=90&crop=false'
        },
      ];
    
      return (
        <section className="py-20 bg-blue-500" id="gadgets">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Available Gadgets for Rent</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gadgets.map((gadget, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded shadow hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{gadget.name}</h3>
                  <div className=""> <img src={gadget.link} alt="img" height={120} width={150}/></div>
                  <p className="text-blue-500 text-lg font-bold">{gadget.price}</p>
                  <ul className="mt-4 space-y-1">
                    {gadget.features.map((feature, i) => (
                      <li key={i} className="text-gray-700">- {feature}</li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
export default Gadets;