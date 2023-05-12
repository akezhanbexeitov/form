import Form from '../form/Form'
import Delivery from '../delivery/Delivery'
import FinalWindow from '../final-window/FinalWindow'
import { Switch, Route } from 'react-router-dom'
import appStyles from './App.module.css'

const App = () => {
  return (
    <main className={appStyles.wrapper}>
      <Switch>
        <Route path='/' exact>
          <Form />
        </Route>

        <Route path='/delivery'>
          <Delivery />
        </Route>

        <Route path='/final'>
          <FinalWindow />
        </Route>
      </Switch>
    </main>
  )
}

export default App
