"use client";

import { Button } from "flowbite-react";
import React, { useState, useEffect } from 'react';

export default function LeilaoOnline() {
  const initialSeconds = 86400; // Tempo inicial em segundos
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0)); // Decrementa o tempo, mas nunca permite que seja menor que 0
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []); // O segundo argumento vazio garante que o useEffect é chamado apenas uma vez, sem dependências

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="py-2 mx-auto max-w-screen-xl">
      <div className="py-1 px-4 mb-3 bg-[#5709BC] text-white uppercase font-bold border-b-4 border-b-[#EC00FF]">
        <h1>Leilões Online</h1>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="box text-center">
          <img src="\images\01_iphone-14.jpg" alt="Foto 1" className="w-32 h-32 rounded-full object-contain mx-auto mb-2" />
          <p>Iphone - Usado</p>
          <div className="timer text-red-500 font-bold">{formatTime()}</div>
          <div className="flex justify-center py-2 mt-2">
            <Button className="bg-[var(--primary-button-color)]">
                <p>Dar lance</p>
            </Button>
          </div>
        </div>

        <div className="box text-center">
          <img src="\images\03_monitor.jpg" alt="Foto 2" className="w-32 h-32 rounded-full object-contain mx-auto mb-2" />
          <p>Monitor - Novo</p>
          <div className="timer text-red-500 font-bold">{formatTime()}</div>
          <div className="flex justify-center py-2 mt-2">
            <Button className="bg-[var(--primary-button-color)]">
                <p>Dar lance</p>
            </Button>
          </div>
        </div>

        <div className="box text-center">
          <img src="\images\05_placa-video.jpg" alt="Foto 3" className="w-32 h-32 rounded-full object-contain mx-auto mb-2" />
          <p>RTX 5090ti</p>
          <div className="timer text-red-500 font-bold">{formatTime()}</div>
          <div className="flex justify-center py-2 mt-2">
            <Button className="bg-[var(--primary-button-color)]">
                <p>Dar lance</p>
            </Button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex justify-center py-2 mt-2">
        <Button className="bg-[var(--primary-button-color)]">
            <p>Ver Todos</p>
        </Button>
      </div>
    </div>
  );
}
