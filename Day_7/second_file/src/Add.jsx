import React,{useRef} from 'react'

const Add = ({name, setName, handleAdd}) => {
    const inputRef=useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
    }
    
    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} ref={inputRef} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
