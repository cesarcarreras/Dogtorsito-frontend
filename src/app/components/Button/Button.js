import './button.css';

const Button = ({
    text='Press me',
    type='primary',
    onPress=()=>{},
    disabled
    })=>(
    <button
       disabled={disabled}
        className={`btn btn-${type} button-form`}
        onClick={onPress}
    >
        {text}
    </button>
)

export default Button;