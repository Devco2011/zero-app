import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { addTrash } from './../../modules/APICalls';

import { Button } from 'react-bootstrap';

export const AddTrashButton = () => {

    const [trashItem, setTrashItem] = useState({});
    const history = useHistory();

    // const handleInputChange = (event) => {
    //     const newItemObj = { ...trashItem };
    //     newItemObj[event.target.id] = event.target.value;
    //     setTrashItem(newItemObj);

    // }

    const handleAddItem = () => {
        const newItemObj = { ...trashItem };
        newItemObj.uid = firebase.auth().currentUser.uid;
        newItemObj.date = Date.now();
        addTrash(newItemObj)
            .then(response => history.push("/Track"))

    }


    return (
        <>
            <Button onClick={handleAddItem}>Track Your Trash</Button>
        </>
    )
}