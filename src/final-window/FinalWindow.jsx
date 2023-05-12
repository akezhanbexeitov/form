import finalWindowStyles from './FinalWindow.module.css'

const FinalWindow = () => {
    return (
        <div className={finalWindowStyles.form}>
            <div className={finalWindowStyles.top}>
                <div className={finalWindowStyles.leftSide}>
                    <div className={finalWindowStyles.item}>
                        <p>Длина</p>
                        <p className={finalWindowStyles.size}>0,45м</p>
                    </div>
                    <div className={finalWindowStyles.item}>
                        <p>Ширина</p>
                        <p className={finalWindowStyles.size}>0,45м</p>
                    </div>
                    <div className={finalWindowStyles.item}>
                        <p>Высота</p>
                        <p className={finalWindowStyles.size}>0,45м</p>
                    </div>
                </div>
                <div className={finalWindowStyles.rightSide}>
                    <p className={finalWindowStyles.item}>Адрес</p>
                    <p className={finalWindowStyles.item}>Откуда: проспект абая 41</p>
                    <p className={finalWindowStyles.item}>Куда: проспект абая 41</p>
                </div>
            </div>

            <div className={finalWindowStyles.bottom}>
                <p className={finalWindowStyles.delivery}>Способ доставки: экспресс доставка</p>
                <p className={finalWindowStyles.totalPrice}>Итог стоимости: 5000тг</p>
            </div>
            <button type='submit' className={finalWindowStyles.button}>Подтвердить</button>
        </div>
    )
}

export default FinalWindow