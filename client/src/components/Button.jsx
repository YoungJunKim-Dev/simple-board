const Button = (props) => {
  const { value, onClick } = props;

  return (
    <button
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("no onClick");
            }
      }
      className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
    >
      {value}
    </button>
  );
};

export default Button;
