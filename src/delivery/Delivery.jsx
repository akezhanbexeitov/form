import { useState } from 'react'
import deliveryStyles from './Delivery.module.css'
import { useHistory } from 'react-router-dom'

const Delivery = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [isShown, setIsShown] = useState(false)
    const history = useHistory()

    const handleSubmit = () => {
        history.push('/final')
    }

    return (
        <div className={deliveryStyles.form}>
            <div onClick={() => setIsShown(!isShown)} className={deliveryStyles.select}>
                <p>{selectedOption}</p>
                { isShown && (
                    <ul className={deliveryStyles.dropdownList}>
                        <li onClick={() => setSelectedOption('Экспресс доставка')} className={deliveryStyles.listItem}>
                            <p>Экспресс доставка</p>
                            <p>5000тг.</p>
                        </li>
                        <li onClick={() => setSelectedOption('В течение дня')} className={deliveryStyles.listItem}>
                            <p>В течение дня</p>
                            <p>5000тг.</p>
                        </li>
                    </ul>
                )}
                {/* TODO add arrow down */}
                {/* <span>&#9660;</span> */}
            </div>
            <button onClick={handleSubmit} type='submit' className={deliveryStyles.button}>Подтвердить</button>
        </div>
    )
}

export default Delivery