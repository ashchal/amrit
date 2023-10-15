function DarkModeToggle({
  darkMode,
  onDarkModeToggle,
}: {
  darkMode: boolean;
  onDarkModeToggle: () => void;
}) {
  return (
    <div className="dark-mode-toggle">
      <label>
        Dark Mode
        <button onClick={onDarkModeToggle}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        {/* <input type="checkbox" checked={darkMode} onChange={onDarkModeToggle} /> */}
      </label>
    </div>
  );
}

export default DarkModeToggle;
