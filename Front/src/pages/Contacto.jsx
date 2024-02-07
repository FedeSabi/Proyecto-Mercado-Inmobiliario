const Contacto = () => {
  return (    

<div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px] mt-28">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre completo"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-400 focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email 
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-400 focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Asunto
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="ingrese asunto"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-400 focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mensaje
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Escriba su mensaje"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-400 focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
  )
}
export default Contacto