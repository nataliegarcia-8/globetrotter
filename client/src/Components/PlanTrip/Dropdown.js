import React, {useState} from 'react';
import locations from '../../locations.json';

const Dropdown = () => {
    const array = locations
    
    const [value, setValue] = useState('')

    const renderCities = () => {
        if (value.length > 1) {
           return array.filter(city => city.city.includes(value))
        }
        
        return []
    }

    return (
        <div>
            <input value={value} onChange={e=> {setValue(e.target.value)}} />
            <select>
                {renderCities().map((city, key) => {
                    return <option key={key}>{city.city}</option>
                })}
            </select>

        </div>
    )
}
export default Dropdown;