import React from 'react';
import { Table } from '@nextui-org/react';

export default function App() {
    return (
        <Table
            bordered
            shadow={false}
            color="secondary"
            aria-label="Example pagination  table"
            css={{
                height: "auto",
                minWidth: "100%",
            }}>
            <Table.Header>
                <Table.Column css={{ textAlign: "center" }}>Day</Table.Column>
                <Table.Column css={{ textAlign: "center" }}>07.00</Table.Column>
                <Table.Column css={{ textAlign: "center" }}>08.00 - 11.45</Table.Column>
                <Table.Column css={{ textAlign: "center" }}>11.45 - 13.00</Table.Column>
                <Table.Column css={{ textAlign: "center" }}>13.00 - 15.00</Table.Column>
                <Table.Column css={{ textAlign: "center" }}>15.30</Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                    <Table.Cell css={{fontWeight:"bold"}}>Mon</Table.Cell>
                    <Table.Cell css={{color: '#7EBF13', fontWeight:"bold"}}>Check Up Patients</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#F57F11',fontWeight:"bold"}}>Break</Table.Cell>
                    <Table.Cell css={{color: '#03EBCF',fontWeight:"bold"}}>Evaluation</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell css={{fontWeight:"bold"}}>Tue</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#7EBF13', fontWeight:"bold"}}>Check Up Patients</Table.Cell>
                    <Table.Cell css={{color: '#F57F11',fontWeight:"bold"}}>Break</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                    <Table.Cell css={{fontWeight:"bold"}}>Wed</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#03EBCF',fontWeight:"bold"}}>Evaluation</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#F57F11',fontWeight:"bold"}}>Break</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
                <Table.Row key="4">
                    <Table.Cell css={{fontWeight:"bold"}}>Thurs</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#7EBF13', fontWeight:"bold"}}>Check Up Patients</Table.Cell>
                    <Table.Cell css={{color: '#03EBCF',fontWeight:"bold"}}>Evaluation</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
                <Table.Row key="5">
                    <Table.Cell css={{fontWeight:"bold"}}>Fri</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#7EBF13', fontWeight:"bold"}}>Check Up Patients</Table.Cell>
                    <Table.Cell css={{color: '#F57F11',fontWeight:"bold"}}>Break</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
                <Table.Row key="6">
                    <Table.Cell css={{fontWeight:"bold"}}>Sat</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                    <Table.Cell css={{color: '#03EBCF',fontWeight:"bold"}}>Evaluation</Table.Cell>
                    <Table.Cell css={{color: '#F57F11',fontWeight:"bold"}}>Break</Table.Cell>
                    <Table.Cell css={{fontWeight:"bold"}}>-</Table.Cell>
                </Table.Row>
            </Table.Body>
            <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={3}
                onPageChange={(page) => console.log({ page })}
            />
        </Table>
    );
}

