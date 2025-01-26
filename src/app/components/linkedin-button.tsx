import linkedinLogo from '../../assets/images/In-Blue-26.png';

function LinkedinButton() {
  return (
    <span className="flex gap-2">
      <img src={linkedinLogo} className="h-6 w-6" alt="linkedin logo" />
      <a
        href="https://www.linkedin.com/in/chetansatpute"
        target="_blank"
        rel="noreferrer noopener"
      >
        chetansatpute
      </a>
    </span>
  );
}

export default LinkedinButton;
