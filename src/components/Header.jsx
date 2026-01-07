import { useState } from "react";

function NavButton({ icon, label, isActive }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
        hover:bg-blue-50
        ${isActive ? "bg-[#01F0D0]" : ""}`}
    >
      <img src={`/images/${icon}.svg`} className="w-4 h-4" alt={label} />
      {label}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    ["overview", "Overview"],
    ["patients", "Patients"],
    ["schedule", "Schedule"],
    ["message", "Message"],
    ["transaction", "Transactions"],
  ];

  return (
    <header className="sticky top-2 z-50 mx-2 md:mx-6 bg-white rounded-full shadow-md px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/images/TestLogo.svg" alt="Logo" className="h-8 md:h-9" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          {navItems.map(([icon, label]) => (
            <NavButton
              key={label}
              icon={icon}
              label={label}
              isActive={label === "Patients"}
            />
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/header-profile-image.png"
            className="w-9 h-9 rounded-full"
            alt="Profile"
          />

          <div className="hidden lg:block text-sm border-r border-gray-400 pr-3">
            <p className="font-semibold">Dr. Jose Simmons</p>
            <p className="text-xs text-gray-500">General Practitioner</p>
          </div>

          <img src="/images/setting.svg" className="w-5 h-5" alt="Settings" />
          <img
            src="/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
            className="w-5 h-5"
            alt="More options"
          />

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-3 space-y-1">
          {navItems.map(([icon, label]) => (
            <NavButton
              key={label}
              icon={icon}
              label={label}
              isActive={label === "Patients"}
            />
          ))}
        </div>
      )}
    </header>
  );
}
