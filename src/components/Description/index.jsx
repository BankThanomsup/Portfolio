const Description =({isHighLight,description}) => {
    return (
      <div className={`text-sm ${isHighLight ? "text-primaryTitle" : ""}`}>
      {description}
      </div>
    )
  }
  export default  Description;














