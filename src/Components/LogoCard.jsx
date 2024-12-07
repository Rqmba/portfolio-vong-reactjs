function LogoCard({ src, alt }) {
    return (
      <div className="p-4">
        <img
          className="w-20 h-20 object-contain mx-auto transform hover:scale-125 transition-transform duration-300"
          src={src}
          alt={alt}
        />
      </div>
    );
  }
  
  export default LogoCard;
  