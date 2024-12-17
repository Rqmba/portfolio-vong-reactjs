function ContainerCard({ title, children, className }) {
  return (
    <div
      className={`p-6 bg-base-200 text-gray-500 rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-50 transform hover:scale-105 transition-transform duration-300 border-none ${className}`}
    >
      {title && <h2 className="text-lg font-semibold text-blue-600 mb-4">{title}</h2>}
      <div className="text-gray-400">{children}</div>
    </div>
  );
}

export default ContainerCard;

