import { Link } from "react-router-dom";
import heroBg from "../assets/wc26-hero.png";

function HeroSection() {
  return (
    <section
      className="
        relative

        mx-6
        mt-6

        overflow-hidden
        rounded-3xl

        border
        border-white/10

        shadow-2xl
      "
    >
      {/* Background Image */}

      <img
        src={heroBg}
        alt="FIFA World Cup 2026"
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
        "
      />

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-black/60
        "
      />

      {/* USA - Canada - Mexico Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-blue-900/40
          via-red-800/30
          to-green-800/40
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          items-center
          justify-center

          text-center

          px-8
          py-24
        "
      >
        {/* Trophy */}

        <div
          className="
            text-8xl

            mb-4

            drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]
          "
        >
          🏆
        </div>

        {/* Main Heading */}

        <h1
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl

            font-black

            uppercase

            text-yellow-100

            drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]
          "
        >
          FIFA WORLD CUP 2026
        </h1>

        {/* Countries */}

        <div
          className="
            mt-4

            flex
            flex-wrap
            justify-center
            gap-3

            text-xl
            md:text-2xl

            font-semibold

            text-white
          "
        >
          <span>USA</span>
          <span>•</span>
          <span>CANADA</span>
          <span>•</span>
          <span>MEXICO</span>
        </div>

        {/* Date */}

        <div
          className="
  mt-5

  rounded-full

  border
  border-yellow-400/40

  bg-gradient-to-r
  from-yellow-500/15
  via-yellow-300/10
  to-yellow-500/15

  backdrop-blur-md

  px-8
  py-3

  text-yellow-200

  font-extrabold

  tracking-[0.25em]

  shadow-lg
  shadow-yellow-500/20
"
        >
          JUNE 11 — JULY 19, 2026
        </div>

        {/* Subtitle */}

        <p
          className="
            mt-8

            max-w-4xl

            text-2xl
            md:text-4xl

            font-light

            text-white
          "
        >
          THE WORLD'S BIGGEST FOOTBALL TOURNAMENT
        </p>

        {/* Stats */}

        <div
          className="
            mt-6

            flex
            flex-wrap
            justify-center
            gap-4

            text-lg

            font-semibold

            text-white/90
          "
        >
          <span>48 TEAMS</span>
          <span>•</span>
          <span>104 MATCHES</span>
          <span>•</span>
          <span>16 HOST CITIES</span>
        </div>

        {/* CTA */}

        <Link
          to="/world-cup"
          className="
  mt-10

  inline-flex
  items-center
  justify-center

  rounded-full

  bg-gradient-to-r
  from-yellow-500
  via-yellow-400
  to-yellow-300

  px-14
  py-4

  text-xl

  font-extrabold

  text-slate-900

  tracking-wide

  shadow-xl
  shadow-yellow-500/30

  transition-all
  duration-300

  hover:scale-105
  hover:shadow-yellow-400/50
  hover:-translate-y-1
"
        >
          Explore Tournament →
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
