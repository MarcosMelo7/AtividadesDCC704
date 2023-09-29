"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  newName: string;
  setNewName: Dispatch<SetStateAction<string>>;
  newEmail: string;
  setNewEmail: Dispatch<SetStateAction<string>>;
  correctAnswersCount: number; // Adicione a variável para o número de questões corretas
  setCorrectAnswersCount: Dispatch<SetStateAction<number>>; // Adicione a função para atualizar a variável
}

const GlobalContext = createContext<ContextProps>({
  newName: "",
  setNewName: (): string => "",
  newEmail: "",
  setNewEmail: (): string => "",
  correctAnswersCount: 0, // Inicialize com 0
  setCorrectAnswersCount: (): number => 0,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [newName, setNewName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0); // Inicialize com 0
  return (
    <GlobalContext.Provider
      value={{ newName, setNewName, newEmail, setNewEmail, correctAnswersCount, setCorrectAnswersCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
