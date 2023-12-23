import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import useSelector from "../hooks/useSelector";
import usePortal from "../hooks/usePortal";
import { URL } from "../api/baseUrl";

export const GlobalContext = createContext<any>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  

  const { data, isLoading } = useFetch({
    url: URL,
    method: "get",
  });
  const { selectors, setSelectors } = useSelector();
  const { portalIsVisible, setPortalIsVisible } = usePortal();

  return (
    <GlobalContext.Provider
      value={{
        data,
        isLoading,
        selectors,
        setSelectors,
        portalIsVisible,
        setPortalIsVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
