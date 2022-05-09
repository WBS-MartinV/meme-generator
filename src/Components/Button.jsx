const Button = ({ label, click, disabled }) => (
    <button key={label} disabled={disabled()} onClick={click}>
        {label}
    </button>
);

export default Button;
