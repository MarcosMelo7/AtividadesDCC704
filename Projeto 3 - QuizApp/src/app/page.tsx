"use client";

import { FormEvent } from 'react';
import axios from 'axios';
import { useGlobalContext } from "@/context/main";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function Home() {

  const { newName, setNewName, newEmail, setNewEmail, correctAnswersCount } = useGlobalContext();

  const router = useRouter();

  const handleSubmitIniciar = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Envie os dados para o servidor
      const response = await axios.post('http://localhost:3000/api/salvar-usuario', {
        nome: newName,
        email: newEmail,
        pontuacao: correctAnswersCount,
      });
  
      // Verifique a resposta do servidor e realize ações apropriadas
      if (response.status === 201) {
        // O usuário foi criado com sucesso, você pode redirecionar ou mostrar uma mensagem de sucesso.
        console.log('Usuário criado com sucesso');
        router.push('/quiz');
      } else {
        // Trate outros casos de resposta, como erros do servidor.
        console.error('Erro ao criar o usuário');
      }
    } catch (error) {
      // Lide com erros de solicitação, como falta de conexão com o servidor.
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <main className="flex flex-col items-center gap-3">
      <p className="text-white text-lg px-5 text-center">
        Teste seus conhecimentos sobre Ciência da Computação!
      </p>
      <div>
        <form
          onSubmit={handleSubmitIniciar}
          className="flex flex-col items-center gap-2"
        >
          <div>
            <label htmlFor="newName">Nome:</label>
            <input
              type="text"
              name="newName"
              id="newName"
              className="text-black p-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="newEmail">Email:</label>
            <input
              type="email"
              name="newEmail"
              id="newEmail"
              className="text-black p-2"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 font-bold py-2 px-4 rounded-full"
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
