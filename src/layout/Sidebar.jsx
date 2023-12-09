import LogoDesktop from '../components/LogoDesktop';
import MainNav from '../components/navigation/MainNav';

function Sidebar() {
  return (
    <aside className="col-span-1 col-end-2 row-span-full row-start-1 border-r-2 flex flex-col items-center gap-7 font-coplette tracking-wide">
      <LogoDesktop/>
      <MainNav/>
    </aside>
  );
}

export default Sidebar;
