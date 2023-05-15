import { useState } from 'react'
import Dimensions from '../dimensions/Dimensions'
import formStyles from './Form.module.css'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [sizes, setSizes] = useState([
        { id: uuidv4() }
    ])
    const [values, setValues] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory()

    const handleSubmit = e => {
        setIsSubmitting(true)
        console.log(values);
        e.preventDefault()
        history.push('/delivery')
    }

    const handleAddButton = () => {
        setSizes([
            ...sizes, 
            { id: uuidv4() }
        ])
    }

    const handleDelete = (id) => {
        setSizes(sizes.filter(item => item.id !== id))
    }

    return (
        <form className={formStyles.form}>
            { sizes.length 
                ?   sizes.map(item => {
                        return (
                            <Dimensions
                                key={item.id}
                                handleDelete={handleDelete}
                                handleSubmit={isSubmitting} 
                                patchValues={setValues}
                                id={item.id}
                            />
                        )
                    })
                :   <p className={formStyles.hint}>Добавьте блок с измерениями</p>
            }
            <button onClick={handleAddButton} type='button' className={formStyles.addButton}>
                <span>Добавить</span>
                <span className={formStyles.plus}>+</span>
            </button>
            <button 
                onClick={handleSubmit} 
                type='submit' 
                className={formStyles.button}
                disabled={!sizes.length}
            >
                Подтвердить
            </button>
        </form>
    )
}

export default Form
