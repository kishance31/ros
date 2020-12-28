import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const BasicPagination = (props) => {
    const {
        totalRecords,
        limit,
        batch,
        onBatchChange
    } = props;

    const [startIndex, setStartIndex] = useState(1);
    const [endIndex, setEndIndex] = useState(limit);
    const [totalPages, setTotalPages] = useState(0)
    const [countArr, setCountArr] = useState([]);

    useEffect(() => {
        setTotalPages(
            (Math.floor(totalRecords / limit) + (totalRecords % limit > 0 ? 1 : 0))
        );
    }, [totalRecords, limit])

    useEffect(() => {
        if ((limit * limit) > totalRecords) {
            const arrLength = (Math.floor(totalRecords / limit) + (totalRecords % limit > 0 ? 1 : 0))
            setCountArr(Array(arrLength).fill().map((_, i) => startIndex + i));
        } else {
            setCountArr(Array(limit).fill().map((_, i) => startIndex + i));
        }
    }, [startIndex, limit, totalRecords]);

    useEffect(() => {
        setEndIndex(limit + startIndex - 1)
    }, [startIndex]);

    const onNextClick = () => {
        if (batch === totalPages) {
            return;
        }
        let nextIndex = batch + 1;
        if (nextIndex === endIndex && nextIndex < totalPages) {
            setStartIndex(startIndex + 1);
        }
        onBatchChange(nextIndex)
    }

    const onLastClick = () => {
        if (batch < totalPages) {
            if ((limit * limit) < totalRecords) {
                setStartIndex(totalPages - limit + 1);
            }
            onBatchChange(totalPages);
        }
    }

    const onPrevClick = () => {
        if (batch === 1) {
            return
        }
        let prevIndex = batch - 1;
        if (prevIndex === startIndex && prevIndex > 1) {
            setStartIndex(startIndex - 1)
        }
        onBatchChange(prevIndex);
    }

    const onFirstClick = () => {
        if (batch > 1) {
            setStartIndex(1);
            onBatchChange(1);
        }
    }

    const onNumberClick = (currentIndex) => {
        if (currentIndex === endIndex && currentIndex < totalPages) {
            setStartIndex(startIndex + 1);
        }
        if (currentIndex === startIndex && currentIndex > 1) {
            setStartIndex(startIndex - 1)
        }
        if(currentIndex !== batch) {
            onBatchChange(currentIndex);
        }
    }

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={batch === 1} onClick={onFirstClick}>
                <PaginationLink first />
            </PaginationItem>
            <PaginationItem disabled={batch === 1} onClick={onPrevClick}>
                <PaginationLink previous />
            </PaginationItem>
            {
                startIndex > 1 ?
                    <PaginationItem >
                        <PaginationLink>
                            <span aria-hidden="true">…</span>
                        </PaginationLink>
                    </PaginationItem> : null
            }
            {
                countArr.map((count, index) =>
                    <PaginationItem key={index} active={batch === startIndex + index} onClick={() => onNumberClick(count)}>
                        <PaginationLink>
                            {count}
                        </PaginationLink>
                    </PaginationItem>
                )
            }
            {
                endIndex < totalPages ? <PaginationItem >
                    <PaginationLink>
                        <span aria-hidden="true">…</span>
                    </PaginationLink>
                </PaginationItem> : null
            }
            <PaginationItem onClick={onNextClick} disabled={batch === totalPages}>
                <PaginationLink next />
            </PaginationItem>
            <PaginationItem disabled={batch === totalPages} onClick={onLastClick}>
                <PaginationLink last />
            </PaginationItem>
        </Pagination>
    );
}

export default BasicPagination;