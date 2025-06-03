import "./Preview.css";

export const Preview = () => {
  const modalClasses = "modal show hide";


  return (
    <>
      <div className="filter-background"></div>

      <div className={modalClasses}>
        <h1>Product Name</h1>
        <h2>Price</h2>
      </div>
    </>
  );
};
