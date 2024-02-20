function CustomButton({ texto, disabled }) {
  return (
    
    <button type="button" disabled={disabled}> {texto} </button>

    
  );
}
  
export default CustomButton;