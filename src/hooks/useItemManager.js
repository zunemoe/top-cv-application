import { useState } from "react";

export function useItemManager(createNewItem, requiredFields = []) {
    const [items, setItems] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addItem = () => {
        const newItem = createNewItem();
        setItems(prev => [newItem, ...prev]);
        setEditingId(newItem.id);
    };

    const handleInputChange = (id, key, value) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
        );
    };

    const saveItem = (id) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, isEditing: false } : item))
        );
        setEditingId(null);
    };

    const editItem = (id) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, isEditing: true } : item))
        );
        setEditingId(id);
    };

    const cancelEdit = (id) => {
        const item = items.find((item) => item.id === id);
        const isEmpty = requiredFields.every(field => !item[field]);

        if (isEmpty) deleteItem(id);
        else {
            setItems((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, isEditing: false } : item
                )
            );
            setEditingId(null);
        }
    };

    const deleteItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
        if (editingId === id) setEditingId(null);
    };

    return {
        items,
        editingId,
        addItem,
        handleInputChange,
        saveItem,
        editItem,
        cancelEdit,
        deleteItem
    };
};