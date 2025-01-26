function ResumeButton() {
  return (
    <a
      href="https://flowcv.me/chetansatpute/Chetan-Satpute-FlowCV-Resume-20250119-38iagrbu0t.pdf"
      target="_blank"
    >
      <button className="flex cursor-pointer gap-2 rounded-md bg-neutral-900 px-2 py-1 text-neutral-200 shadow-md hover:bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z" />
        </svg>
        <span className="font-bold">Resume</span>
      </button>
    </a>
  );
}

export default ResumeButton;
