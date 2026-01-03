import { Download } from 'lucide-react';

function Header() {
  return (
    <header className="border-b border-neutral-700">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 text-sm">
        {/* Left */}
        <span className="text-neutral-100">~/chetan</span>

        {/* Right */}
        <a
          download
          href="/resume.pdf"
          target="_blank"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          <span className="flex items-center gap-2">
            resume <Download size={14} />
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
