import desktopLogo from '../assets/logo/ss-logo.png';

function Sidebar() {
  return (
    <aside className="col-span-1 col-end-2 row-span-full row-start-1 border-r-2 flex flex-col items-center">
      <img
        src={desktopLogo}
        alt="SpaceSaver desktop logo"
        className="mt-[-3rem]"
      />
      <div className='border mt-[-1.5rem] w-[13rem]'></div>
    </aside>
  );
}

export default Sidebar;
