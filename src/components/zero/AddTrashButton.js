import { useState } from 'react';
import firebase from 'firebase';
import { addTrash } from './../../modules/APICalls';

import { Button } from 'react-bootstrap';

export const AddTrashButton = ({ getAllTrash }) => {

    const [trashItem, setTrashItem] = useState({});


    // const handleInputChange = (event) => {
    //     const newItemObj = { ...trashItem };
    //     newItemObj[event.target.id] = event.target.value;
    //     setTrashItem(newItemObj);

    // }

    const handleAddItem = () => {
        const newItemObj = { ...trashItem };
        newItemObj.uid = firebase.auth().currentUser.uid;
        newItemObj.date = Date.now();
        addTrash(newItemObj).then(getAllTrash)

    }


    return (
        <>
            <Button variant="secondary" onClick={handleAddItem}>Add A Bag of Trash</Button>
        </>
    )
}