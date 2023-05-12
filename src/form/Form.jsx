import { useState } from 'react'
import formStyles from './Form.module.css'
import { useHistory } from 'react-router-dom'
import Error from '../error/Error'

const Form = () => {
    let [length, setLength] = useState(null)
    let [width, setWidth] = useState(null)
    let [height, setHeight] = useState(null)
    let [count, setCount] = useState(0)
    let [isError, setIsError] = useState(false)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (length && width && height && count > 0) {
            history.push('/delivery')
        } else {
            setIsError(true)
        }
    }

    const handleIncrement = () => {
        setCount(++count)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(--count)
        }
    }

    return (
        <form className={formStyles.form}>
            <div className={formStyles.item}>
                <label className={formStyles.label} htmlFor="length">Длина</label>
                <input 
                    className={formStyles.input} 
                    type="number" 
                    name="length"
                    placeholder='0,45м'
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>
            <div className={formStyles.item}>
                <label className={formStyles.label} htmlFor="width">Ширина</label>
                <input
                    className={formStyles.input}
                    type="number" 
                    name="width"
                    placeholder='0,45м'
                    onChange={(e) => setWidth(e.target.value)}
                />
            </div>
            <div className={formStyles.item}>
                <label className={formStyles.label} htmlFor="height">Высота</label>
                <input
                    className={formStyles.input}
                    type="number" 
                    name="height"
                    placeholder='0,45м'
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className={formStyles.item}>
                <p className={formStyles.label}>Кол-во</p>
                <div className={formStyles.counter}>
                    <button type='button' onClick={handleDecrement} className={formStyles.math}>-</button>
                    <p className={formStyles.number}>{ count }</p>
                    <button type='button' onClick={handleIncrement} className={formStyles.math}>+</button>
                </div>
            </div>
            <button type='button' className={formStyles.addButton}>
                <span>Добавить</span>
                <span className={formStyles.plus}>+</span>
            </button>
            <button onClick={handleSubmit} type='submit' className={formStyles.button}>Подтвердить</button>
            { isError && <Error />}
        </form>
    )
}

export default Form
