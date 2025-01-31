
// import PropTypes from "prop-types";
const FormattedDate =({ isHighLight,children }) => {
  return (
    <div>
    <span className={`text-sm ${isHighLight ? "text-primaryAccent" : ""}`}>
      {children}
      </span>
  </div>
  )
}

// FormattedDate.propTypes = {
//   isHighLight: PropTypes.bool,  // ตรวจสอบว่า isHighLight ต้องเป็น boolean
//   children: PropTypes.node,    // ตรวจสอบว่า children รองรับค่าใด ๆ ที่ React รองรับ เช่น string, JSX, หรือ null
// };
export default  FormattedDate;