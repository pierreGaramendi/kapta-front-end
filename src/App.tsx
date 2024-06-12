import React from "react";
import { Aside } from "./components/holy-grail/Aside/Aside";
import Topbar from "./components/holy-grail/topbar/Topbar";
import Main from "./components/holy-grail/Main";
import { useStore } from "./modules/stores/useAsideStore";
import { ThemeProvider } from "./modules/stores/theme-provider";
import { useAuth } from "./modules/auth/useAuth";
import useIndexedDB from "./modules/indexdb/useIndexDb.ts";


export const App: React.FC = () => {
  useIndexedDB();
  const { login } = useAuth();
  const outerLogin = () => {
    login();
  };
  outerLogin();
  
  const asideVisible = useStore((state) => state.asideVisible);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={`app ${asideVisible ? "aside-visible" : ""}`}>
        <Aside visible={asideVisible} />
        <div className="recipient">
          <Topbar />
          <Main></Main>
        </div>
      </div>
    </ThemeProvider>
  );
};
