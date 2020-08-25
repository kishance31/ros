import { useState } from 'react';
import { useDispatch } from 'react-redux';

// custom hook to manage pagination states
export const usePaginationHook = (defaultLimit = 5, dispatchMethod) => {
    const [batch, setBatch] = useState(1);
    const [limit, setLimit] = useState(defaultLimit);

    const dispatch = useDispatch();

    const handleBatchChange = (currentBatch) => {
        setBatch(currentBatch || batch);
        if (typeof dispatchMethod === "function") {
            dispatch(dispatchMethod());
        }
    }

    return {
        batch, limit, handleBatchChange
    }
}