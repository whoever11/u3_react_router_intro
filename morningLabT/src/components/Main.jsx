 
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/componentA" element={<ComponentA />} />
                <Route path="/componentB" element={<ComponentB />} />
            </Routes>
        </div>
    )
    }

export default Main