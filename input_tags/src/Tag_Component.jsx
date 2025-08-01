import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './Tag_Slice'; 
import './Tag_Component.css'

function Tag_Component() {
    const list = useSelector((state) => state.tag.list);
    const dispatch = useDispatch();
    const [tag, setTag] = useState('');

    function handleKeyDown(e) {
        if ((e.key === 'Enter' || e.key === ',') && tag.trim() !== '') {
            e.preventDefault();
            dispatch(add(tag.trim()));
            setTag('');
        }
    }

    return (
        <div className='tag-container'>
            {list.map((tag, index) => (
                <div className='tag' key={index}>
                    <p>{tag}</p>
                    <button onClick={() => dispatch(remove(index))}><b>X</b></button>
                </div>
            ))}

            <input
                value={tag}
                onKeyDown={handleKeyDown}
                onChange={(e) => setTag(e.target.value)}
                placeholder='Enter tag..'
            />
        </div>
    );
}

export default Tag_Component;
