

const Menu = ({children,className}) => {
  return (
    <>
      <ul className={`  ${className}`}>{children}</ul>
    </>
  );
};

export default Menu;
