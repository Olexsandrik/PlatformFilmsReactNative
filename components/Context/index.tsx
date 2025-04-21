import { createContext, useContext } from "react";
type SearchContextType = {
  search: string;
  setSearch: (e: string) => void;
};
export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

export const useMySearch = (): SearchContextType => useContext(SearchContext);
