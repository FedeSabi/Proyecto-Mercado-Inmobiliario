import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-around flex-wrap mt-5">
        <div className="flex flex-col gap-1 mr-12">
          <h1 className="mb-3 text-xl">
            <b>Inmuebles</b>
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
          <a href="#">Contacto Inmobiliarias</a>
          <a href="#">Contacto Empresas Constructoras</a>
          <a href="#">Contacto Asesores Financieros</a>
        </div>
        <div className="flex flex-col gap-1 ml-3">
          <h1 className="mb-3 text-xl">
            <b>Sobre Mercado Imobiliario</b>
          </h1>
          <a href="#">Nosotros</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
          <p href="#">
            <b>Segue-Nos</b>
          </p>
          <div className="flex mt-3 gap-3 mb-5 text-orange-500 text-2xl">
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
