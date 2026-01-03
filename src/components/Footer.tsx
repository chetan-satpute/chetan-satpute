import { Copyright } from 'lucide-react';

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 border-t border-neutral-700 py-4 text-center text-sm text-neutral-500">
      <Copyright size={14} />
      <span>2026 Chetan Satpute</span>
    </footer>
  );
}

export default Footer;
