const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className="font-semibold text-slate-500">
        <button
          className="mr-1 font-semibold disabled:text-slate-300 disabled:translate-x-0 hover:-translate-x-1 dark:text-slate-300 dark:disabled:text-slate-500"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className={`${
                page - 1 === i
                  ? "w-6 rounded bg-sky-300 font-semibold text-sky-50 dark:bg-sky-400 dark:text-sky-50"
                  : ""
              } mx-2 hover:-translate-y-1 dark:text-slate-300`}
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        <button
          className="ml-1 font-semibold hover:translate-x-1 disabled:translate-x-0 disabled:text-slate-300 dark:text-slate-300 dark:disabled:text-slate-500"
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
