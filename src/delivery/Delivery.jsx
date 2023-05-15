import { useState } from 'react'
import deliveryStyles from './Delivery.module.css'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
                <p>{selectedOption ? selectedOption : 'Выберите вариант'}</p>
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
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <button onClick={handleSubmit} type='submit' className={deliveryStyles.button}>Подтвердить</button>
        </div>
    )
}

export default Delivery