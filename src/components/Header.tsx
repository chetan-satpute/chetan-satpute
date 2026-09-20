const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="border-border bg-background/60 sticky top-0 z-10 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-en-display text-foreground hover:text-accent text-meta tracking-[0.08em] transition-colors"
        >
          Chetan Satpute
        </a>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:bg-surface-2/70 hover:text-foreground text-meta rounded-full px-3 py-1.5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
