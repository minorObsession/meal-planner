import Logo from "../assets/mushroom.svg";
import CalendarSelect from "./CalendarSelect";
import { useManagerContext } from "../contexts/ManagerContext";

function Header() {
  //console.log(useManagerContext())
  const { isManagerLoggedIn } = useManagerContext();
  return (
    <header className="fixed flex justify-between top-0 left-0 w-full bg-background/80 shadow-md p-0 px-4 z-50 items-start">
      {/* // ! LOGO  */}
      <div className="columns-2 width-full">
        <img className=" w-20 p-4" src={Logo} />
      </div>

      <p className="italic self-center">
        {isManagerLoggedIn && "Manager Logged in"}
      </p>

      {isManagerLoggedIn && (
        <div className="p-4">
          <CalendarSelect />
        </div>
      )}

      <div className="sm:max-sm:flex ite"></div>
    </header>
  );
}

export default Header;
