import React, { createContext, useContext, useState } from "react";
import { api } from "../services/apiClient";
import { useAPI } from "../context/APIContext";

export interface tabBooks {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: string;
}

export interface Book {
  data: tabBooks[];
  page: number;
  totalPages: number;
  totalItems: number;
}

interface tabBooksProviderProps {
  children: React.ReactNode;
}

interface tabBooksContextdata {
  getBooks(page: number): Promise<tabBooks[]>;
  tabBooks: tabBooks[];

  getBooksDetail(id: string): Promise<tabBooks>;
  tabBooksDetail: tabBooks;
}

const tabBooksContext = createContext<tabBooksContextdata>(
  {} as tabBooksContextdata
);

export function TabBooksProvider({ children }: tabBooksProviderProps) {

  const {restAPI} = useAPI();

  const [tabBooks, setBook] = useState([] as tabBooks[]);
  async function getBooks(page: number) {
    try {
      const response = await restAPI().get(`/books?page=1`);
      setBook(response.data.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return { error };
    }
  }

  const [tabBooksDetail, setBooksDetail] = useState({} as tabBooks);
  async function getBooksDetail(id: string) {
    try {
      const response = await api.get(`/books/${id}`);
      setBooksDetail(response.data);
      return response.data;
    } catch (error) {
      return { error };
    }
  }

  return (
    <tabBooksContext.Provider
      value={{
        getBooks,
        tabBooks,
        getBooksDetail,
        tabBooksDetail,
      }}
    >
      {children}
    </tabBooksContext.Provider>
  );
}

export function useTabBooks(): tabBooksContextdata {
  const context = useContext(tabBooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a booksProvider");
  }
  return context;
}
