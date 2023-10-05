import Depoimentos from "@/components/layout/depoimentos/Depoimentos";
import DeafultCarousel from "@/components/layout/Carousel";
import { Footer } from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import DeafultCard from "@/components/layout/leiloes_online/Card";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="h-72 w-4/6 flex justify-center items-center mb-2 mx-auto">
          <DeafultCarousel />
        </section>
        <div className="bg-purple-800 flex justify-center py-2 justify-between w-4/6 mx-auto">
          <section className="flex justify-center align-center text-white m-2">LEILÕES ONLINE</section>
        </div>
        <div className="flex justify-center bg-pink-500 py-1 w-4/6 mx-auto"></div>
        <section className="flex flex-wrap justify-center space-x-9 w-4/6 mt-2 mx-auto">
          <DeafultCard />
          <DeafultCard />
          <DeafultCard />
          <DeafultCard />
        </section>
        <button className="p-2 mt-4 mb-3 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
          Ver Todos
        </button>
        <Depoimentos/>
      </main>
      <Footer />
    </div>
  );
}
