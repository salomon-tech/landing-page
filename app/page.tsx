// {montre qu'on appel react dans le fichier page.tsx}
"use client";

// {importation de react et des hooks nécessaires}
import { useEffect, useState } from "react";
// {importation des image pour le carousel via pinterest en ligne}
const images = [
  "https://i.pinimg.com/736x/75/52/30/7552305613c04bde20ec800961861c4f.jpg",
  "https://i.pinimg.com/736x/35/5e/ea/355eea6483947c8ee1444db7e867da85.jpg",
  "https://i.pinimg.com/736x/51/df/12/51df12ccb1bb085b1da5a0a3fc1f2889.jpg",
];

export default function page() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="font-bold text-xl text-indigo-700">Xuno</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              command="show-modal"
              commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-gray-900">
              Accueil
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              À propos
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Service
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <el-dialog>
          <dialog
            id="mobile-menu"
            className="backdrop:bg-transparent lg:hidden"
          >
            <div tabIndex={0} className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <span className="font-bold text-xl text-indigo-700">
                      Xuno
                    </span>
                  </a>
                  <button
                    type="button"
                    command="close"
                    commandfor="mobile-menu"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Accueil
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        À propos
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Service
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Contact
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6 gap-16">
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-6 leading-tight">
            Bienvenue sur Xuno
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-xl">
            Découvrez nos services innovants pour l'éducation et la formation.
            <br />
            Rejoignez-nous pour explorer un monde de possibilités.
          </p>
          <button className="px-10 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition text-lg">
            Explorer
          </button>
        </div>
        {/* Carousel à droite */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            <img
              src={images[current]}
              alt={`slide-${current + 1}`}
              className="rounded-2xl shadow-2xl w-full h-[28rem] object-cover aspect-[16/10] bg-gray-100"
            />
            <button
              onClick={() =>
                setCurrent((current - 1 + images.length) % images.length)
              }
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 shadow hover:bg-indigo-100"
              aria-label="Précédent"
            >
              &#8592;
            </button>
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 shadow hover:bg-indigo-100"
              aria-label="Suivant"
            >
              &#8594;
            </button>
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-4 h-4 rounded-full ${
                    idx === current ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrent(idx)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
