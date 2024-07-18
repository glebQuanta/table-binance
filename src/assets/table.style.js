import { styled, css } from "styled-components";
import { Table } from 'react-bootstrap';

const getRowColor = (pnL) => parseFloat(pnL) > 0 ? 'green' : 'red';

export const StyledTable = styled(Table)`

    width: 100%;
    border: 1px solid #ddd;
    margin: 20px 0;
    border-collapse: collapse;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #ccffcc;
        font-weight: bold;
    }

    tbody tr:hover {
        background-color: #e6ffe6;
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
