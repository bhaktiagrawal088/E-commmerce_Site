import { useNavigate } from "react-router-dom";
export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <header className="flex bg-green-900 items-center py-4 px-8 text-slate-50">
      <div className="flex">
        <h1 onClick={() => navigate('/')} className="text-3xl">Shop It</h1>
      </div>
      <nav className="flex ml-auto gap-8 ">
        <span className="material-icons-outlined text-3xl hover:cursor-pointer ">favorite</span>
        <span className="material-icons-outlined text-3xl hover:cursor-pointer">shopping_cart</span>
        <span className="material-icons-outlined text-3xl hover:cursor-pointer">account_circle</span>
      </nav>
    </header>
  );
};
