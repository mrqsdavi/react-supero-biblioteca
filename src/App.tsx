import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Input, ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import ptBR from 'antd/es/locale/pt_BR';
import moment from 'moment';
import 'moment/locale/pt-br';
import BooksScreen from './screens/Books';
import BookDetailScreen from './screens/BookDetail';
import SuperoSvg from './assets/images/supero.svg';
import { changeSearch } from './store/book/actions';
import { searchDataSelector } from './store/book/selectors';

import _ from 'lodash';

import STORE from './store';

const { Header, Content } = Layout;

moment.locale('pt-br');

const Home = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(searchDataSelector);


  const search = (text: string) => {
    dispatch(changeSearch(1, {
      ...searchData,
      Busca: text
    }))
  }

  const debounceSearch = _.debounce(search, 500);

  return (
    <Layout>
      <Header className="header">
        <img src={SuperoSvg} alt="Logo" className="logo" />
        <Input
          size="large"
          placeholder="Busque livros pelo título, autor ou ISBN"
          prefix={<SearchOutlined />}
          onChange={(e) => debounceSearch(e.target.value)}
        />
      </Header>
      <Layout className="contentLayout">
        <Content
          className="site-layout-background"
        >
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <BooksScreen />
              </Route>
              <Route path="/book/:id">
                <BookDetailScreen />
              </Route>
            </Switch>
          </BrowserRouter>
        </Content>
      </Layout>
    </Layout>
  )
}

const App = () => {
  return (
    <Provider store={STORE}>
      <ConfigProvider locale={ptBR}>
        <Home />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
