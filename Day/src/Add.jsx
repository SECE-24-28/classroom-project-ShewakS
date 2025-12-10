import React from 'react'

const Add = ({name, setName, handleAdd}) => {
    return (
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button type="submit" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Add