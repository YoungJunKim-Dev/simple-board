const Card = ({ children }) => {
  return (
    <div>
      <div className="mb-4 mt-4 rounded-xl bg-slate-50 pb-8 pt-6 shadow-md dark:bg-slate-800/25 sm:px-8">
        {children}
      </div>
    </div>
  );
};

export default Card;
