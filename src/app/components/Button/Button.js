import './button.css';

const Button = ({
    text='Press me',
    type='submit',
    onPress=()=>{},
    disabled
    })=>(
    <button
       disabled={disabled}
        className={`btn-${type} button-form`}
        onClick={onPress}
    >
        {text}
    </button>
)

export default Button;