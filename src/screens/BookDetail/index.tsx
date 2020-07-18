import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Spin } from 'antd';
import BookService from '../../services/BookService';
import Book from '../../models/Book'

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 14 },
};


const BookDetail: React.FC = () => {

  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<Book | undefined>(undefined);

  const getBookDetail = useCallback(async () => {
    setLoading(true)
    try {
      const response = await BookService.getBook(id);
      setBook(response.data)
    } catch (e) { }
    setLoading(false)
  }, [id]);

  useEffect(() => {
    getBookDetail();
  }, [getBookDetail]);

  return (
    <Form key={`${loading}`} {...layout} initialValues={book} name="nest-messages">
      {loading && <Spin size="large" />}
      <Form.Item name={['id']} label="Id">
        <InputNumber disabled />
      </Form.Item>
      <Form.Item name={['titulo']} label="Título" rules={[{ required: true }]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name={['isbn', 'isbn10']} label="ISBN10" rules={[{ type: 'email' }]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name={['isbn', 'isbn13']} label="ISBN13" rules={[{ type: 'email' }]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name={['autor']} label="Autor">
        <Input disabled />
      </Form.Item>
      <Form.Item name={['editor']} label="Editora">
        <Input disabled />
      </Form.Item>
      <Form.Item name={['ano']} label="Ano" rules={[{ required: true }]}>
        <InputNumber disabled />
      </Form.Item>
      <Form.Item name={['idioma']} label="Idioma">
        <Input disabled />
      </Form.Item>
      <Form.Item name={['peso']} label="Peso">
        <InputNumber disabled />
      </Form.Item>
      <Form.Item name={['comprimento']} label="Comprimento">
        <InputNumber disabled />
      </Form.Item>
      <Form.Item name={['largura']} label="Largura">
        <InputNumber disabled />
      </Form.Item>
      <Form.Item name={['altura']} label="Altura">
        <InputNumber disabled />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="button" onClick={() => {
          history.push('/');
        }}>
          Voltar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BookDetail;