import React from 'react';
import { Button, Table, DatePicker, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnType } from "antd/es/table";

import { TableTopWrapper, DatesWrapper } from './styles'

interface IBookColumn {
  key: number;
  titulo: string;
  autor: string;
  editora: string;
  ano: number;
}

const columns: ColumnType<IBookColumn>[] = [
  {
    title: 'Título',
    dataIndex: 'titulo',
    key: 'titulo',
    width: '40%'
  },
  {
    title: 'Autor',
    dataIndex: 'autor',
    key: 'autor',
    width: '15%'
  },
  {
    title: 'Editora',
    dataIndex: 'editora',
    key: 'editora',
    width: '20%'
  },
  {
    title: 'Ano',
    dataIndex: 'ano',
    key: 'ano',
    width: '15%'
  },

  {
    title: 'Action',
    key: 'operation',
    width: '10%',
    render: () => <a>action</a>,
  },
];



const Books: React.FC = () => {
  const data: IBookColumn[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      titulo: `Título ${i}`,
      autor: 'Teste',
      editora: `Brasil. ${i}`,
      ano: i,
    });
  }
  return (
    <div>
      <TableTopWrapper>
        <DatesWrapper>
          <Typography.Text>Filtrar por ano de publicação:</Typography.Text>
          <DatePicker picker="year" />
          <Typography.Text>até</Typography.Text>
          <DatePicker picker="year" />
        </DatesWrapper>
        <Button type="primary" icon={<PlusOutlined />}>Novo</Button>
      </TableTopWrapper>
      <Table columns={columns} dataSource={data} scroll={{ x: 700 }} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default Books;