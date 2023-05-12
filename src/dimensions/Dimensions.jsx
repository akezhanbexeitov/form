/* eslint-disable react/prop-types */
import dimensionsStyles from './Dimensions.module.css'
import { useState } from 'react'

const Dimensions = (props) => {
    const { handleDelete, id } = props
    let [length, setLength] = useState(null)
    let [width, setWidth] = useState(null)
    let [height, setHeight] = useState(null)
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(++count)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(--count)
        }
    }

    // console.log(length, width, height)
    // console.log(id)

    return (
        <div className={dimensionsStyles.container}>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="length">Длина</label>
                <input 
                    className={dimensionsStyles.input} 
                    type="number" 
                    name="length"
                    placeholder='0,45м'
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="width">Ширина</label>
                <input
                    className={dimensionsStyles.input}
                    type="number" 
                    name="width"
                    placeholder='0,45м'
                    onChange={(e) => setWidth(e.target.value)}
                />
            </div>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="height">Высота</label>
                <input
                    className={dimensionsStyles.input}
                    type="number" 
                    name="height"
                    placeholder='0,45м'
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className={dimensionsStyles.item}>
                <p className={dimensionsStyles.label}>Кол-во</p>
                <div className={dimensionsStyles.counter}>
                    <button type='button' onClick={handleDecrement} className={dimensionsStyles.math}>-</button>
                    <p className={dimensionsStyles.number}>{ count }</p>
                    <button type='button' onClick={handleIncrement} className={dimensionsStyles.math}>+</button>
                </div>
            </div>
            <button onClick={() => handleDelete(id)} className={dimensionsStyles.close} type='button'></button>
        </div>
    )
}

export default Dimensions
