function Header() {
  return (
    <header className="border-b border-neutral-700">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 text-sm">
        {/* Left */}
        <span className="text-neutral-100">~/chetan</span>

        {/* Right */}
        <a
          href="mailto:chetan.satpute2002@gmail.com"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          chetan.satpute2002@gmail.com
        </a>
      </div>
    </header>
  );
}

export default Header;
