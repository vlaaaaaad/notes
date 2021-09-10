import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search({ findNote }) {
    const [buffer, setBuffer] = useState("");
    return(
        <div className="right">
                <input 
                    type="text"
                    className="search"
                    placeholder="Search by title" 
                    value={buffer}
                    onChange={(event) => setBuffer(
                        event.target.value
                    )}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            findNote(buffer);
                            setBuffer("");
                        }
                      }}
                />
                <IconButton 
                    size="small"
                    style={{padding: '5px'}}
                    onClick={() => {
                        findNote(buffer); 
                        setBuffer("");
                    }}
                    >
                    <SearchIcon />
                </IconButton>
        </div>
    );
}