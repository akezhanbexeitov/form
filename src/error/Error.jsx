import errorStyles from './Error.module.css'

const Error = () => {
    return (
        <p className={errorStyles.message}>Заполните все поля</p>
    )
}

export default Error
