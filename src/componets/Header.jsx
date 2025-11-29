

export default function Header() {

  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16 
        flex items-center justify-between px-6 z-60
        backdrop-blur-xl bg-white/30 dark:bg-gray-900/30
        shadow-md transition-all

        max-md:left-0   /* when sidebar moves to bottom */
        max-md:right-0
      " 
    >
      <h1 className="text-xl font-bold dark:text-white">My Portfolio</h1>

    </header>
  );
}

