import React from 'react';
import { Button } from 'antd';
import './index.less';

function Header() {
  return (
    <div className='header'>
      <span>I am Header</span>
      <Button type='primary'>样式</Button>
    </div>
  );
}

export default Header;
