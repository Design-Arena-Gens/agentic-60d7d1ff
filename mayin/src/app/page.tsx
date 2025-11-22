import Link from "next/link";

const highlights = [
  {
    label: "Cobertura regional",
    value: "Zaragoza y municipios vecinos",
  },
  {
    label: "Disponibilidad total",
    value: "Servicio 24/7, 365 días",
  },
  {
    label: "Contacto inmediato",
    value: "WhatsApp 233 125 2947",
  },
];

const pilares = [
  {
    title: "Aliado de confianza",
    description:
      "Resolvemos necesidades cotidianas con cercanía local: compras urgentes, traslados de productos y recados especiales.",
  },
  {
    title: "Innovación accesible",
    description:
      "Tecnología pensada para la región: seguimiento en tiempo real, comunicación directa y pagos flexibles.",
  },
  {
    title: "Impulso a lo local",
    description:
      "Conectamos comercios, productores y clientes para que la derrama económica se quede en Zaragoza.",
  },
];

const expressServicios = [
  {
    title: "Entrega desde cualquier negocio",
    description:
      "Fonditas, restaurantes, mercados, farmacias, ferreterías o tiendas especializadas. Si está en la región, lo llevamos.",
  },
  {
    title: "Pagos sin complicaciones",
    description:
      "Aceptamos efectivo, transferencias y pagos mixtos para facilitarte cada pedido, sin comisiones escondidas.",
  },
  {
    title: "Atención personalizada",
    description:
      "Coordinamos cada entrega por WhatsApp con un asistente humano que entiende tu urgencia y te mantiene al tanto.",
  },
  {
    title: "Pedidos especiales",
    description:
      "Desde compras grandes hasta detalles de última hora. Hacemos fila, verificamos productos y confirmamos contigo.",
  },
];

const pasos = [
  {
    title: "Escríbenos por WhatsApp",
    description:
      "Comparte qué necesitas, desde qué negocio y a qué domicilio va. Respondemos en minutos, sin chatbots.",
  },
  {
    title: "Te confirmamos costo y tiempo",
    description:
      "Calculamos traslado, método de pago y cualquier detalle adicional. Aprobado por ti, salimos de inmediato.",
  },
  {
    title: "Seguimiento con nombre y apellido",
    description:
      "Sabes quién lleva tu pedido, en qué punto va y cuándo llegará. Te avisamos al momento de entregar.",
  },
];

const cobertura = [
  "Zaragoza, Puebla",
  "Teziutlán",
  "Tlatlauquitepec",
  "Nicholasa Rancho Nuevo",
  "Municipios vecinos y comunidades intermedias",
];

const otrasUnidades = [
  {
    name: "Mayin Servicios Profesionales",
    description:
      "Consultoría administrativa, capacitación y soluciones digitales para emprendedores locales.",
  },
  {
    name: "Mayin Hogar y Eventos",
    description:
      "Renta de mobiliario, ambientación y soporte logístico para celebraciones familiares y comunitarias.",
  },
  {
    name: "Mayin Conecta",
    description:
      "Canales de difusión y marketing regional para comercios y talento emergente.",
  },
];

const whatsappLink = "https://wa.me/522331252947?text=Hola%20Mayin%20Express%2C%20necesito%20hacer%20un%20pedido";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.15),_transparent_40%)]" />

      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-6 pb-24 pt-28 md:flex-row md:gap-24">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
            Grupo Mayin
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Servicios locales que se sienten cercanos, rápidos y confiables.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Somos el paraguas que conecta soluciones para la vida diaria en
            Zaragoza y municipios cercanos. Con MAYIN EXPRESS, llevamos a tu
            puerta lo que necesitas, a cualquier hora, desde cualquier comercio.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsappLink}
              className="group inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Pedir por WhatsApp
              <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="#mayin-express"
              className="inline-flex items-center justify-center rounded-full border border-slate-400/40 px-8 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-200/60 hover:text-white"
            >
              Conoce Mayin Express
            </a>
          </div>
        </div>

        <div className="flex-1 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-8 backdrop-blur">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Nuestra promesa
          </div>
          <p className="text-lg text-slate-200">
            Estar presentes donde la tecnología global no llega. Resolver en
            minutos lo que parece complicado. Mantener viva la atención humana
            y la confianza entre vecinos.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-800/60 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-blue-200/70">
                  {item.label}
                </dt>
                <dd className="mt-3 text-sm font-medium text-slate-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="grupo-mayin"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[2fr,3fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              GRUPO MAYIN es la familia de servicios que cubre el día a día de
              la región.
            </h2>
            <p className="mt-6 text-base text-slate-300">
              Nacimos en Zaragoza y crecimos escuchando a quienes hacen posible
              la vida en la zona: familias, comercios, productores y
              profesionistas. Cada unidad de negocio responde a necesidades que
              detectamos acompañando a la comunidad.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pilares.map((pilar) => (
              <div
                key={pilar.title}
                className="rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6 shadow-[0_0_60px_rgba(12,12,26,0.25)]"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {pilar.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mayin-express"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Mayin Express
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50 md:text-4xl">
              Nuestro servicio estrella de entregas a domicilio, listo 24/7.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-slate-300">
              Operamos como el Rappi o Didi local, con logística y mensajeros
              propios. Si hay un negocio o proveedor en la región, Mayin Express
              lo conecta contigo sin importar la hora.
            </p>
          </div>
          <Link
            href={whatsappLink}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Programar un pedido ahora
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {expressServicios.map((servicio) => (
            <article
              key={servicio.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-amber-300/60"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gradient-to-bl dark:from-amber-200/15 dark:via-transparent dark:to-blue-300/10" />
              <h3 className="text-lg font-semibold text-slate-100">
                {servicio.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{servicio.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-700/60 bg-slate-900/70 p-10 md:p-16">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)]" />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
                Así de simple funciona.
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Diseñamos el proceso para que nunca te quedes esperando o con
                dudas. Desde la primera conversación hasta que recibes tu pedido,
                estamos contigo en cada paso.
              </p>
            </div>
            <div className="grid gap-6">
              {pasos.map((paso, index) => (
                <div
                  key={paso.title}
                  className="flex gap-4 rounded-3xl border border-slate-700/60 bg-slate-950/60 p-5"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber-400/20 text-base font-semibold text-amber-200">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {paso.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {paso.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Cobertura presente, sin perder el toque humano.
            </h2>
            <p className="mt-5 text-base text-slate-300">
              Llegamos a las colonias, barrios y comunidades que rodean Zaragoza.
              Si tu localidad no aparece, escríbenos: analizamos la ruta y
              respondemos en minutos.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {cobertura.map((zona) => (
                <li
                  key={zona}
                  className="flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/60 px-5 py-3"
                >
                  <span className="h-2 w-2 flex-none rounded-full bg-amber-400" />
                  {zona}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8">
            <h3 className="text-lg font-semibold text-slate-100">
              Resolvemos entregas que otros no toman
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Medicamentos a medianoche, herramientas antes de abrir el taller,
              ingredientes faltantes para tu venta, regalos de última hora.
              Coordinamos con los comercios para validar existencias y, si es
              necesario, proponemos alternativas.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Cada entrega va asegurada con verificación fotográfica y evidencia
              de recibo. Tu tranquilidad es prioridad.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-[2.25rem] border border-slate-700/60 bg-gradient-to-br from-blue-500/20 via-slate-900/70 to-slate-950/80 p-10 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
                GRUPO MAYIN sigue creciendo contigo.
              </h2>
              <p className="mt-5 text-base text-slate-100">
                MAYIN EXPRESS es una de nuestras unidades, pero no la única. El
                grupo evoluciona con proyectos que conectan servicios, talento y
                experiencias locales.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-200">
              {otrasUnidades.map((unidad) => (
                <div
                  key={unidad.name}
                  className="rounded-3xl border border-slate-500/50 bg-slate-950/60 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-50">
                    {unidad.name}
                  </h3>
                  <p className="mt-2 text-slate-300">{unidad.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-28">
        <div className="rounded-[2.25rem] border border-amber-300/40 bg-amber-400/10 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold text-amber-100 md:text-4xl">
            Listos para mover lo que necesites, sin importar la hora.
          </h2>
          <p className="mt-4 text-base text-amber-200/80">
            Escribe a WhatsApp y coordina tu pedido con un aliado real de
            Zaragoza.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href={whatsappLink}
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-200"
            >
              Pedir por WhatsApp (233 125 2947)
            </Link>
            <a
              href="tel:+522331252947"
              className="inline-flex items-center justify-center rounded-full border border-amber-200 px-8 py-3 text-base font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} GRUPO MAYIN. Todos los derechos
            reservados.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink}
              className="rounded-full border border-slate-700/60 px-4 py-2 transition hover:border-amber-200 hover:text-amber-200"
            >
              WhatsApp 233 125 2947
            </a>
            <span className="rounded-full border border-slate-700/60 px-4 py-2 text-slate-500">
              Zaragoza, Puebla · Atención 24/7
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
