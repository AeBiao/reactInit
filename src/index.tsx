import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { GET_COOKIE } from './utils/Cookies'
import { createFromIconfontCN } from '@ant-design/icons';
import r from "./imgs/1.png"

const MyIcon = createFromIconfontCN({
  scriptUrl: './imgs/1.png', // 在 iconfont.cn 上生成
});
ReactDOM.render(
    <Provider store={store}>
        <MyIcon type='icon-example'></MyIcon>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);