import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = ({ isActive }) =>
    `
    relative

    text-[16px]
    font-semibold
    tracking-wide

    transition-all
    duration-300

    px-1
    py-2

    ${
      isActive
        ? `
          text-yellow-400
          drop-shadow-[0_0_8px_cyan]
        `
        : `
          text-gray-200
          hover:text-yellow-300
        `
    }
  `;

  return (
    <nav
      className="
      sticky
      top-0
      z-50

      w-full
      h-[95px]

      flex
      items-center
      justify-between

      px-16

      bg-[#001F5B]/90

      backdrop-blur-xl

      border-b
      border-cyan-400/10

      shadow-[0_0_30px_rgba(0,255,255,0.06)]
    "
    >
      {/* LEFT SECTION */}

      <div
        className="
        flex
        items-center
        gap-4

        cursor-pointer
      "
      >
        {/* Logo */}

        <div
          className="
          text-5xl

          drop-shadow-[0_0_15px_cyan]
        "
        >
          🏆
        </div>

        {/* Brand Name */}

        <h1
          className="
          text-white

          text-4xl
          font-black

          tracking-wide

          select-none
        "
        >
          FIFA WC26
        </h1>
      </div>

      {/* RIGHT SECTION */}

      <div
        className="
        flex
        items-center
        gap-10
      "
      >
        <NavLink to="/" className={linkStyles}>
          {({ isActive }) => (
            <>
              Home
              {isActive && (
                <span
                  className="
                  absolute
                  left-0
                  -bottom-1

                  w-full
                  h-[2px]

                  rounded-full

                  bg-cyan-400

                  shadow-[0_0_12px_cyan]
                "
                />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/players" className={linkStyles}>
          Players
          
        </NavLink>

        <NavLink to="/match-center" className={linkStyles}>
          Match Center
        </NavLink>

        <NavLink to="/world-cup" className={linkStyles}>
          World Cup 2026
        </NavLink>

        <NavLink to="/teams" className={linkStyles}>
          Teams
        </NavLink>

        <NavLink to="/favorites" className={linkStyles}>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
