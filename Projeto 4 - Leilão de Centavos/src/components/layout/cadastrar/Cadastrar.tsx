"use client";

import React from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const Cadastrar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <form className="flex mx-auto flex-grow flex-col gap-4 mt-4 w-screen">
          <div className="w-full p-4">
            <h1 className="font-semibold text-gray-500 text-3xl">
              CADASTRO
            </h1>
          </div>
          <h2 className="bg-blue-900 text-white text-xl font-semibold p-1 pl-4" style={{ borderBottom: '2px solid orange' }}>Dados Pessoais</h2>
          <div className="-mt-4 p-4 border border-gray-300">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nome completo" />
              </div>
              <TextInput className="w-full" id="name" required type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mail" value="Email" />
              </div>
              <TextInput id="mail" required type="email" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmemail" value="Confirmar Email" />
              </div>
              <TextInput id="confirmemail" required type="email" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cpf" value="CPF" />
              </div>
              <TextInput id="cpf" required type="number" />
            </div>
          </div>
          <h2 className="bg-blue-900 text-white text-xl font-semibold p-1 pl-4" style={{ borderBottom: '2px solid orange' }}>Dados para Acesso ao Site</h2>
          <div className="-mt-4 p-4 border border-gray-300">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="login" value="Login" />
              </div>
              <TextInput id="login" required type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="passwordLogin" value="Senha" />
              </div>
              <TextInput id="passwordLogin" required type="password" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmPasswordLogin" value="Confirmar Senha" />
              </div>
              <TextInput id="confirmPasswordLogin" required type="password" />
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Checkbox id="termsLogin" />
              <Label htmlFor="termsLogin">
                Li e aceito os termos de condição de uso.
              </Label>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Checkbox id="newsletterLogin" />
              <Label htmlFor="newsletterLogin">
                Desejo receber emails promocionais
              </Label>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center mt-4">
        <div className="flex justify-center">
          <Button className="bg-yellow-300" type="submit" color="light">
            Criar conta
          </Button>
        </div>
        <p className="text-sm mt-2">
          Já possui conta? <Link href={"/login/entrar"}>Entrar</Link>
        </p>
        <Button className="text-sm w-fit bg-gray-400 ml-auto">
          <Link href="/">Voltar para a Página Inicial</Link>
        </Button>
      </div>
    </div>
  );
};
