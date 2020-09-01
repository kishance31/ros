import { useState } from 'react';

// custom hook to manage pagination states
export const usePaginationHook = (defaultLimit = 5, batchNumber = 1, dispatchMethod, onBatchUpdate) => {
    const [limit, setLimit] = useState(defaultLimit);

    const handleBatchChange = (currentBatch) => {
        if (typeof dispatchMethod === "function") {
            dispatchMethod(currentBatch);
        }
    }

    return {
        limit, handleBatchChange
    }
}