"use client";

import React from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const Entrar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <form className="flex mx-auto flex-grow flex-col gap-4 mt-4 w-screen">
          <div className="w-full p-4">
            <h1 className="font-semibold text-gray-500 text-3xl">
              ENTRAR
            </h1>
          </div>
          <h2 className="bg-blue-900 text-white text-xl font-semibold p-1 pl-4" style={{ borderBottom: '2px solid orange' }}>ENTRAR</h2>
          <div className="-mt-4 p-4 border border-gray-300">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Login/Email/CPF" />
              </div>
              <TextInput
                id="email1"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Senha" />
              </div>
              <TextInput id="password1" required type="password" />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Lembrar de mim</Label>
            </div>
          </div>
          <div className="text-center bg-gray-200 -mt-4 p-2">
            <div className="flex gap-2">
              <Button className="bg-yellow-400 w-36" type="submit" color="light">
                Entrar
              </Button>
              <Button className="bg-yellow-400 " type="submit" color="light">
                Recuperar senha
              </Button>
              <Button className="text-sm w-fit bg-gray-400 ml-auto">
                <Link href={"/login/cadastrar"}>Cadastro</Link>
              </Button>
              <Button className="text-sm w-fit bg-gray-400 ml-auto">
                <Link href="/">Voltar para a Página Inicial</Link>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};