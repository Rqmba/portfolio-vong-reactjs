function ContainerCard({ title, children, className }) {
  return (
    <div
      className={`p-6 bg-slate-200 text-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {title && <h2 className="text-lg font-semibold text-purple-600 mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}


export default ContainerCard;

