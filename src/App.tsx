import React from 'react';
import { Layout, Input, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ptBR from 'antd/es/locale/pt_BR';
import moment from 'moment';
import 'moment/locale/pt-br';
import BooksScreen from './screens/Books';

import SuperoSvg from './assets/images/supero.svg';

const { Header, Content } = Layout;

moment.locale('pt-br');

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Layout>
        <Header className="header">
          <img src={SuperoSvg} alt="Logo" className="logo" />
          <Input size="large" placeholder="Busque livros pelo título, autor ou ISBN" prefix={<SearchOutlined />} />
        </Header>
        <Layout className="contentLayout">
          <Content
            className="site-layout-background"
          >
            <BooksScreen />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
