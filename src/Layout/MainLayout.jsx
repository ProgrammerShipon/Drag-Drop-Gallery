import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        <header>
           Hi, Ollyo
        </header>
        
        <main>
           <Outlet />
        </main>
        
        <footer>
           <p>this a Job task</p>
        </footer>
    </>
  );
};

export default MainLayout;
