import { useRef, useEffect } from "react";

export function useAutoFocus(editingId, options = {}) {
    const { focusSelector = 'input:first-of-type' } = options;
    const focusRef = useRef(null);

    useEffect(() => {
        if (editingId && focusRef.current) {
            setTimeout(() => {
                const firstInput = focusRef.current.querySelector(focusSelector);
                if (firstInput)  firstInput.focus();
            }, 100);
        }
    }, [editingId, focusSelector]);

    return focusRef;
}