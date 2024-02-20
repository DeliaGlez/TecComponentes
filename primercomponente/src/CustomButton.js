function CustomButton({ texto, disabled }) {
  return (
    
    <button type="button" disabled={disabled}  style={{ height: '25px' }}> {texto} </button>

  );
}
  
export default CustomButton;