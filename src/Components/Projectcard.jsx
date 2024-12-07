function Projectcard({ children }) {
  return (
    <div className="p-6 bg-gray-800 text-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
      {children}
    </div>
  );
}

export default Projectcard;
