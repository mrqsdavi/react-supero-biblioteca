import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table, DatePicker, Typography } from 'antd';
import { ColumnType } from "antd/es/table";
import { TableTopWrapper, DatesWrapper } from './styles'
import Book from '../../models/Book';
import { getBooks, changeSearch } from '../../store/book/actions';
import {
  booksSelector, loadingSelector,
  totalCountSelector, searchDataSelector,
  currentPageSelector, maxPerPageSelector
} from '../../store/book/selectors';

const columns: ColumnType<Book>[] = [
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
    title: 'Ações',
    key: 'operation',
    width: '10%',
    render: () => <a href="# ">Detalhes</a>,
  },
];



const Books: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(loadingSelector);
  const books = useSelector(booksSelector);
  const currentPage = useSelector(currentPageSelector)
  const maxPerPage = useSelector(maxPerPageSelector)
  const totalCount = useSelector(totalCountSelector)
  const searchData = useSelector(searchDataSelector)

  useEffect(() => {
    dispatch(getBooks({
      Busca: searchData?.Busca,
      AnoInicial: searchData?.AnoInicial,
      AnoFinal: searchData?.AnoFinal,
      Sorting: searchData?.Sorting,
      MaxResultCount: searchData?.MaxResultCount,
      SkipCount: searchData?.SkipCount,
    }))
  }, [dispatch, searchData])
  return (
    <div>
      <TableTopWrapper>
        <DatesWrapper>
          <Typography.Text>Filtrar por ano de publicação:</Typography.Text>
          <DatePicker picker="year" onChange={(date) => {
            dispatch(changeSearch(1, {
              ...searchData,
              AnoInicial: date?.get('year') || 0
            }))
          }} />
          <Typography.Text>até</Typography.Text>
          <DatePicker picker="year" onChange={(date) => {
            dispatch(changeSearch(1, {
              ...searchData,
              AnoFinal: date?.get('year') || 5000
            }))
          }} />
        </DatesWrapper>

      </TableTopWrapper>
      <Table
        loading={loading}
        columns={columns}
        dataSource={books}
        rowKey="id"
        scroll={{ x: 700 }}
        pagination={{ pageSize: maxPerPage, total: totalCount, current: currentPage }}
        onChange={(pagination) => dispatch(changeSearch(pagination.current || 1, searchData))}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              history.push(`book/${record.id}`);
            },
          };
        }}
      />
    </div>
  );
}

export default Books;