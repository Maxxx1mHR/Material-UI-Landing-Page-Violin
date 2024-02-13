import { createContext, ReactNode } from "react";
import { DataContentText } from "../interfaces/dataContentText.interface";
import dataText from "@utils/dataText.json";

interface DataContextType {
  data: DataContentText;
}

interface DataContentProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType>({
  data: dataText,
});

export const DataContentProvider = ({ children }: DataContentProviderProps) => {
  const dataContent: DataContentText = dataText;

  if (!dataContent) {
    return <div>Loading...</div>;
  }

  return <DataContext.Provider value={{ data: dataContent }}>{children}</DataContext.Provider>;
};
