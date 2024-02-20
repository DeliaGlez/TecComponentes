function CustomInput({ label, disabled, type }) {
    return (
      <>
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="">{label}</label>

          <div>
            <input type={type} disabled={disabled}  style={{ height: '25px' }} />
          </div>
          
        </div>
      </>
    );
  }
  
  
  export default CustomInput;