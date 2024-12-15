// just to apply style to the children of the component
const ItemPadding: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="grid auto-rows-min grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
        {children}
      </div>
    </div>
  );
};

export default ItemPadding;
