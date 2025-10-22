import './button.css'

function Button({ children, onClick, variant = 'primary', disabled = false }) {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button