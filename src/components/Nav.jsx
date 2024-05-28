import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Nav() {
  const [searchKey,setSearchKey] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  }
  return (
    <nav className=" flex items-center justify-between z-20 bg-black text-white px-10 py-4">
      <NavLink to={"/"} className="text-5xl font-bold font-mono ">Moviee</NavLink>
      <div className="flex items-center space-x-9 ">
        <NavLink className={({isActive})=>
          isActive ? "active-text" : "non-active-text"
        } to={'/' }>Popular</NavLink>
        <NavLink className={({isActive})=>
          isActive ? "active-text" : "non-active-text"
        } to={'/upcoming'}>Upcoming</NavLink>
        <NavLink className={({isActive})=>
          isActive ? "active-text" : "non-active-text"
        } to={'/rating'} >Rating</NavLink>
      </div>
      <div>
        <form className="flex items-center " onSubmit={search}>
          <input
            type="text"
            className="text-xl bg-transparent border-b border-slate-300 focus:outline-none"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-6" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
