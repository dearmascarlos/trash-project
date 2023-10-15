import Image from "next/image";

const LaLey = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <a className="flex w-full self-start px-6 pb-4">JESSY LA LEY</a>
      <div className="flex flex-row w-full h-full ">
        <div className="flex h-[230px] self-start">
          <Image
            alt="about-chico"
            src={`/images/19.png`}
            width={180}
            height={112}
            className="rounded-xl p-2"
          />
          <div className="flex flex-col w-[60%] p-2">
            <span>¿Qué es Lorem Ipsum?</span>
            <span className="h-[200px]">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500 tralari tralara.
            </span>
          </div>
        </div>
      </div>
      <span className="flex p-2">
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
        relleno en documentos electrónicos, quedando esencialmente igual al
        original. Fue popularizado en los 60s con la creación de las hojas
        Letraset, las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
      </span>
      <div>
        <Image
          alt="about-chico"
          src={`/images/10.png`}
          width={380}
          height={112}
          className="rounded-xl p-2"
        />
      </div>
      <span className="flex p-2 mb-10">
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
        relleno en documentos electrónicos, quedando esencialmente igual al
        original. Fue popularizado en los 60s con la creación de las hojas
        `Letraset`, las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
      </span>
    </div>
  );
};

export default LaLey;
