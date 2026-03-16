import { useState, useRef } from 'react'

import InputSteps from './InputSteps.jsx'
import ListSteps from './ListSteps.jsx'

const RenderSteps = () => {

    const [form, setForm] = useState({
        date: '20.07.2000',
        distance: '3'
    });

    const [items, setItems] = useState([]);
    const focusDistance = useRef(null);

    const onChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        setItems(prevItems => {
            let sortItems;

            if (prevItems.find(item => item.date === form.date) && prevItems.length > 0) {
                sortItems = prevItems.map(item => item.date === form.date ? { ...item, distance: (+item.distance + +form.distance) } : item)
            } else {
                sortItems = [...prevItems, form];
            }
            // Сортировка
            sortItems.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
       
            return sortItems;
        })
    }

    const onReduction = (id) => {
        const returned = items.find(item => item.date === id);
        setForm(prevForm => ({ ...prevForm, date: returned.date, distance: returned.distance }));
        onDelete(id);
        if (focusDistance.current) {
            focusDistance.current.focus();
        }

    }

    const onDelete = (id) => {
        setItems(items => items.filter(item => item.date != id));
    }
    return (
        <div class="container">
            <InputSteps
                onSubmit={onSubmit}
                form={form}
                onChange={onChange}
                focusDistance={focusDistance}
            />
            <ListSteps
                items={items}
                onDelete={onDelete}
                onReduction={onReduction}
            />
        </div>
    );
}

export default RenderSteps