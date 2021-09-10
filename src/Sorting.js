import React, { useState, useEffect } from 'react';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

export default function Sorting({sortByTitle, sortByDate}) {
    return(
        <div className="left">
            <Button
                size = "medium"
                endIcon = {<ImportExportIcon />}
                onClick = {() => sortByTitle()}
            >      
            Title
            </Button>

            <Button
                size = "medium"
                endIcon = {<ImportExportIcon />}
                onClick = {() => sortByDate()}
            >      
            Date
            </Button>
         </div>
    );
}