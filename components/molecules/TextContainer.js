const TextContainer = ({ title, subtitle, text }) => {
  return (
    <>
      {subtitle && <p className="text-22 font-bold mb-4">{subtitle}</p>}
      <h2 className="text-45 font-bold mb-12">{title}</h2>
      <p className="text-16 mb-8 leading-normal">{text}</p>
    </>
  );
};

export default TextContainer;
