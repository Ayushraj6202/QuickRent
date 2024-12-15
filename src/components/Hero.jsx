import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 h-screen" id="hero">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold">Rent Gadgets With Ease</h1>
                    <p className="text-lg mt-4">Explore a wide variety of gadgets at affordable prices.</p>
                    <button  className="mt-6 bg-white text-blue-600 px-6 py-3 rounded shadow-lg hover:bg-gray-100" onClick={()=>navigate('/gadgets')}>Explore Rentals</button>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-3d-rendered-illustration-of-tech-gadgets-and-office-appliances-image_3741663.jpg" alt="Gadget Rentals" />
                </div>
            </div>
        </section>
    );
}

export default Hero;