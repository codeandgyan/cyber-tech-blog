import { MoonIcon, SunIcon } from "@phosphor-icons/react";

function ToggleTheme() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <button
      onClick={toggleTheme}
      className={`p-1 px-3 cursor-pointer rounded
            bg-gray-200 text-black
            dark:bg-gray-800 dark:text-gray-200
            hover:opacity-70 active:opacity-50 active:scale-95 transition`}
    >
      <SunIcon size={24} className="hidden dark:block" />
      <MoonIcon size={24} className="block dark:hidden" />
    </button>
  );
}

export default ToggleTheme;
