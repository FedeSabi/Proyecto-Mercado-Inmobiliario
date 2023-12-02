import imagen1 from "../assets/img/bernard-1.jpg";
import imagen2 from "../assets/img/chris-curry-1.jpg";
import imagen3 from "../assets/img/chris-curry-2.jpg";
import imagen4 from "../assets/img/fomstock-4.jpg";
import imagen5 from "../assets/img/gus-ruballo-1.jpg";
import imagen6 from "../assets/img/yaopey-1.jpg";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="py-10 bg-w m-4 sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light   text-black sm:text-4xl lg:text-5xl">
            <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
              Nuestras
            </span>{" "}
            propiedades disponibles.
          </h2>
          <p className="mb-20 text-lg text-gray-900 mt-2">
            Comes directly from the desk of engineers, creators and managers at
            Skcript.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 ">
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-3 pb-3">
                        Destacados
                      </h2>
                      <p className="text-lg font-light text-white">
                        Destacados
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen1}
                  className="w-full h-full object-fill object-center justify-items-stretch"
                />
              </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-3 pb-3">
                        Lanzamientos
                      </h2>
                      <p className="text-lg font-light text-white">
                        Lanzamientos
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen2}
                  className="w-full z-0  h-full    object-fill example "
                />
              </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-3 pb-3">
                        Propietarios
                      </h2>
                      <p className="text-lg font-light text-white">
                        propietarios
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen3}
                  className="w-full z-0  h-full    object-fill example "
                />
              </div> 
            </a>
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-3 pb-3">
                        Nuevos
                      </h2>
                      <p className="text-lg font-light text-white">Nuevos</p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen4}
                  className="w-full z-0  h-full    object-fill example"
                />
              </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-3 pb-3">
                        Mobiliados
                      </h2>
                      <p className="text-lg font-light text-white">
                        Mobiliados
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen5}
                  className="w-full z-0 h-full object-fill example"
                />
              </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-lefttransition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white  mb-3 pb-3">
                        Temporales
                      </h2>
                      <p className="text-lg font-light text-white">
                        Temporales
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={imagen6}
                  className="w-full z-0  h-full object-fill example"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-around flex-wrap">
        <div className="flex flex-col gap-1">
          <h1 className="mb-3 text-xl">
            <b>Imoveis</b>
          </h1>
          <a href="#">Solicitar um Imoveis</a>
          <a href="#">Publicar um imovel</a>
          <a href="#">Buscar imoveis</a>
          <a href="#">Ver solicitudes de imoveis</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="mb-3 text-xl">
            <b>Professionais</b>
          </h1>
          <a href="#">Encontre Corretores</a>
          <a href="#">Encontre Empresas cConstrutoras</a>
          <a href="#">Encontre Assessores Financeiros</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="mb-3 text-xl">
            <b>Sobre Mercado Imobiliario</b>
          </h1>
          <a href="#">sobre Nos</a>
          <a href="#">Blog</a>
          <a href="#">Contato</a>
          <p href="#">
            <b>Segue-Nos</b>
          </p>
          <div className="flex mt-3 gap-3 mb-4 text-lime-900 text-2xl">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
