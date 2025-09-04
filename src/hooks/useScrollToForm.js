import { useRef, useEffect } from "react";

export function useScrollToForm(editingId) {
    const editingRef = useRef(null);

    useEffect(() => {
        if (editingId && editingRef.current) {
            setTimeout(() => {
                editingRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }, 100); // Delay to ensure the element is rendered
        }
    }, [editingId]);
    
    return editingRef;
}