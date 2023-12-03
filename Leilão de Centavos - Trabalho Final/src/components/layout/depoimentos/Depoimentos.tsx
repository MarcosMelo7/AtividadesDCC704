"use client";

import v1 from "@/assets/imgs/v1.jpg";
import v2 from "@/assets/imgs/v2.jpg";
import v3 from "@/assets/imgs/v3.jpg";
import ThumbVideo from "./ThumbVideo";
import { Button } from "flowbite-react";

export default function Depoimentos() {
  return (
    <div className="flex w-full h-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-lg shadow-lg">
      <div className="w-[80%]">
        <div className="py-6 px-4 text-3xl text-white uppercase font-medium text-center">
          <h1>Depoimentos de quem arrematou nossos Leilões!!</h1>
        </div>
        <div className="flex gap-4 justify-center">
          <ThumbVideo urlVideo={v1} nome="Cristiano Ronaldo - PT" />
          <ThumbVideo urlVideo={v2} nome="Cristiano Ronaldo - PT" />
          <ThumbVideo urlVideo={v3} nome="Cristiano Ronaldo - PT" />
        </div>
        <div className="flex justify-center py-2 mt-2">
          <Button className="bg-[var(--primary-button-color)]">
            <p>Ver Todos</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
