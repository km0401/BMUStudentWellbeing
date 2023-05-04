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
        <Table.Column css={{textAlign:"center"}}>Register</Table.Column>
        <Table.Column css={{textAlign:"center"}}>Name</Table.Column>
        <Table.Column css={{textAlign:"center"}}>Action</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell css={{fontWeight:"bold"}}>#12345</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Umang</Table.Cell>
          <Table.Cell css={{ color: "green", fontWeight:"bold"}}>Done</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell css={{fontWeight:"bold"}}>#23456</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Khushi</Table.Cell>
          <Table.Cell css={{ color: "blue", fontWeight:"bold"}}>Progress</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell css={{fontWeight:"bold"}}>#34567</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Raghav</Table.Cell>
          <Table.Cell css={{ color: "red", fontWeight:"bold"}}>Pending</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell css={{fontWeight:"bold"}}>#45678</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Utsav</Table.Cell>
          <Table.Cell css={{ color: "green", fontWeight:"bold"}}>Done</Table.Cell>
        </Table.Row>
        <Table.Row key="5">
          <Table.Cell css={{fontWeight:"bold"}}>#56789</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Anuj</Table.Cell>
          <Table.Cell css={{ color: "blue", fontWeight:"bold"}}>Progress</Table.Cell>
        </Table.Row>
        <Table.Row key="6">
          <Table.Cell css={{fontWeight:"bold"}}>#24567</Table.Cell>
          <Table.Cell css={{fontWeight:"bold"}}>Aditya</Table.Cell>
          <Table.Cell css={{ color: "red", fontWeight:"bold"}}>Pending</Table.Cell>
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

