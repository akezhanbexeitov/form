/* eslint-disable react/prop-types */
import dimensionsStyles from './Dimensions.module.css'
import { useState, useEffect, useRef} from 'react'

const Dimensions = (props) => {
    const { 
        handleDelete, 
        id, 
        isSubmitting, 
        patchValues 
    } = props
    let [length, setLength] = useState("")
    let [width, setWidth] = useState("")
    let [height, setHeight] = useState("")
    let [count, setCount] = useState(0)

    let lengthRef = useRef("")
    let widthRef = useRef("")
    let heightRef = useRef("")
    let countRef = useRef(0)

    useEffect(() => {
        patchValues((prev) => [...prev, 
            {
                length: lengthRef, 
                width: widthRef, 
                height: heightRef, 
                count: countRef
            }
        ])
    }, [isSubmitting])

    const handleIncrement = () => {
        setCount(++count)
        countRef.current += 1
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(--count)
            countRef.current -= 1
        }
    }

    return (
        <div className={dimensionsStyles.container}>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="length">Длина</label>
                <input 
                    className={dimensionsStyles.input} 
                    type="number" 
                    name="length"
                    placeholder='0,45м'
                    value={length}
                    onChange={(e) => {
                        setLength(e.target.value)
                        lengthRef.current = e.target.value
                    }}
                />
            </div>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="width">Ширина</label>
                <input
                    className={dimensionsStyles.input}
                    type="number" 
                    name="width"
                    placeholder='0,45м'
                    value={width}
                    onChange={(e) => {
                        setWidth(e.target.value)
                        widthRef.current = e.target.value
                    }}
                />
            </div>
            <div className={dimensionsStyles.item}>
                <label className={dimensionsStyles.label} htmlFor="height">Высота</label>
                <input
                    className={dimensionsStyles.input}
                    type="number" 
                    name="height"
                    placeholder='0,45м'
                    value={height}
                    onChange={(e) => {
                        setHeight(e.target.value)
                        heightRef.current = e.target.value
                    }}
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
