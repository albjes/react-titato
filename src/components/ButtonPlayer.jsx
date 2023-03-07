const ButtonPlayer = ({ value, onSquareClick }) => {
  return (
    <button
      className="border-2 w-14 h-14 m-1 p-2 hover:bg-slate-400"
      onClick={onSquareClick}
    >
      {value === "X" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black pointer-events-none select-none duration-300 h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 20 20 4M4 4 20 20"
          ></path>
        </svg>
      )}
      {value === "O" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black pointer-events-none select-none duration-300 h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default ButtonPlayer;
