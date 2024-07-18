import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import {
    StyledTable,
    StyledTableRow,
    Thead,
    TBody,
    Tr,
    Td,
    Th
} from '../assets/table.style';

import { initialData } from '../data/data';

export const TablePage = () => {

    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'default' });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://66966a0d0312447373c2706b.mockapi.io/api/list/Jack');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const preprocess = (value, key) => {

        if (key === 'PnL' || key === 'ROI' || key === 'Margin' || key === 'Funding') return parseFloat(value.replace(/[^\d,.+-]/g, '').replace(',', '.'));

        if (key === 'Time') return parseFloat(value.replace(' hours', ''));

        return value;

    };

    const handleSort = useCallback((key) => {

        let direction = 'ascending';

        if (sortConfig.key === key && sortConfig.direction === 'ascending') direction = 'descending';
        else if (sortConfig.key === key && sortConfig.direction === 'descending') direction = 'default';

        const sortedData = [...data];

        sortedData.sort((a, b) => {

            const aValue = preprocess(a[key], key);
            const bValue = preprocess(b[key], key);

            if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
            if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
            return 0;

        });

        setData(direction === 'default' ? initialData : sortedData);
        setSortConfig({ key, direction });

    }, [data, sortConfig]);

    const getSortIcon = (columnKey) => {

        if (sortConfig.key === columnKey) {

            if (sortConfig.direction === 'ascending') return '▼';
            else if (sortConfig.direction === 'descending') return '▲';

        }

        return '↕';

    };

    return (
        <>
            <StyledTable striped bordered hover>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th onClick={() => handleSort('entryPoint')}>
                            Entry point {getSortIcon('entryPoint')}
                        </Th>
                        <Th onClick={() => handleSort('PnL')}>
                            PnL {getSortIcon('PnL')}
                        </Th>
                        <Th onClick={() => handleSort('ROI')}>
                            ROI {getSortIcon('ROI')}
                        </Th>
                        <Th onClick={() => handleSort('Take')}>
                            Take {getSortIcon('Take')}
                        </Th>
                        <Th onClick={() => handleSort('NumAttempts')}>
                            Quantity averaged {getSortIcon('NumAttempts')}
                        </Th>
                        <Th onClick={() => handleSort('Margin')}>
                            Margin {getSortIcon('Margin')}
                        </Th>
                        <Th onClick={() => handleSort('Funding')}>
                            Funding {getSortIcon('Funding')}
                        </Th>
                        <Th onClick={() => handleSort('Size')}>
                            Size {getSortIcon('Size')}
                        </Th>
                        <Th onClick={() => handleSort('Time')}>
                            Time {getSortIcon('Time')}
                        </Th>
                    </Tr>
                </Thead>
                <TBody>
                    {data.map((item, index) => (
                        <StyledTableRow key={index} $pnl={item.PnL}>
                            <Td onClick={() => console.log('name')}>{item.name}</Td>
                            <Td>{item.entryPoint}</Td>
                            <Td>{item.PnL}</Td>
                            <Td>{item.ROI}</Td>
                            <Td>{item.Take}</Td>
                            <Td>{item.NumAttempts}</Td>
                            <Td>{item.Margin}</Td>
                            <Td>{item.Funding}</Td>
                            <Td>{item.Size}</Td>
                            <Td>{item.Time}</Td>
                        </StyledTableRow>
                    ))}
                </TBody>
            </StyledTable>
        </>
    );
};
