import { NavLink } from 'react-router-dom';

const Archive = () => {
  return (
    <section className="flex w-full justify-center font-pixel-bold">
      <div className="flex flex-col items-center text-center md:p-0 p-2">
        <h1 className="text-yellow-300 lg:text-6xl text-3xl mt-32 mb-20">
          DELTAJUNE
          <span className="text-white block"> NEWSLETTERS</span>
        </h1>
        <div>
          <NavLink
            to="/summer2026"
            className="block hover:opacity-90 max-w-sm mb-24"
          >
            <h2 className="text-xl text-yellow-300">ISSUE 2 - Summer 2026</h2>
            <p className="!font-pixel-bold">
              Heeeeey everyone! Do you still remember us?
            </p>
          </NavLink>
          <NavLink
            to="/christmas2025"
            className="block hover:opacity-90 max-w-sm mb-24"
          >
            <h2 className="text-xl text-yellow-300">ISSUE 1 - Christmas 2025</h2>
            <p className="!font-pixel-bold">
              This is but one of the Christmas surprises I’ve made this year...
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Archive;
