// import { useState } from 'react'
import { useState } from 'react'
import Dimensions from '../dimensions/Dimensions'
import formStyles from './Form.module.css'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
// import Error from '../error/Error'

const Form = () => {
    // let [isError, setIsError] = useState(false)
    const [sizes, setSizes] = useState([
        { id: uuidv4() }
    ])
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push('/delivery')
    }

    const handleAddButton = () => {
        setSizes([
            ...sizes, 
            { id: uuidv4() }
        ])
        console.log(sizes)
    }

    const handleDelete = (id) => {
        console.log(1)
        setSizes(sizes.filter(item => item.id !== id))
    }

    return (
        <form className={formStyles.form}>
            { sizes.map(item => {
                return <Dimensions key={item.id} handleDelete={handleDelete} id={item.id}/>
            })}
            <button onClick={handleAddButton} type='button' className={formStyles.addButton}>
                <span>Добавить</span>
                <span className={formStyles.plus}>+</span>
            </button>
            <button onClick={handleSubmit} type='submit' className={formStyles.button}>Подтвердить</button>
            {/* { isError && <Error />} */}
        </form>
    )
}

export default Form
