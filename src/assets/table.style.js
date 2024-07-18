import { styled, css } from "styled-components";
import { Table } from 'react-bootstrap';

const getRowColor = (pnL) => parseFloat(pnL) > 0 ? '#0ECB81' : '#E33B54';  

export const StyledTable = styled(Table)`

    width: 100%;
    border: 1px solid #2B3139;
    border-collapse: collapse;
    background-color: #181A20;

    th, td {
        border: 1px solid #2B3139;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #181A20; //#181A20
        color: white;
        font-weight: bold;
    }

    tbody tr:hover {
        background-color: #0B0E11;
    }
`;

export const StyledTableRow = styled.tr`${({ $pnl }) => css`color: ${getRowColor($pnl)};`}`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Td = styled.td`

    @media (max-width: 1024px) {
        font-size: 14px;
    }

`;

export const Th = styled.th`

    @media (max-width: 1024px) {
        font-size: 14px;
    }

`;

export const TBody = styled.tbody``;

export const PopupContainer = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

`;

export const PopupInner = styled.div`

    background: #28262D; 
    color: #fff; 
    padding: 20px;
    border-radius: 10px;
    width: 250px;
    position: relative;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

`;

export const CloseButton = styled.span`

    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 32px;
    cursor: pointer;
    color: #fff; 
    transition: color 0.3s ease;

    &:hover {
        color: #ff0000; 
    }

`;

export const PopupName = styled.h2`

   @media (max-width: 1024px) {
        font-size: 16px;
    }

`;

export const PopupText = styled.p`

   @media (max-width: 1024px) {
        font-size: 14px;
    }

`;
