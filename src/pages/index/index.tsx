import React, { useState } from 'react';
import { Button } from 'antd';
import { getList } from 'Src/mock';
import './index.less';

function getRandomRange(min: number, max: number) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  console.info('当前生成随机数：', random);

  return random;
}

function getStaples(stapleList: string[], num = 1) {
  const staples = [];
  const list = [...new Set(stapleList)];
  let inum = num;

  do {
    const index = getRandomRange(0, list.length - 1);
    const staple = list[index];
    staples.push(staple);
    list.splice(index, 1);
    inum--;
  } while (inum > 1);

  return staples;
}

function getNoStaples(stapleList: string[], num = 1) {
  const nostaples = [];
  const list = [...new Set(stapleList)];
  let inum = num;

  do {
    console.info(list);
    const index = getRandomRange(0, list.length - 1);
    const staple = list[index];
    nostaples.push(staple);
    list.splice(index, 1);
    inum--;
  } while (inum >= 1);

  return nostaples;
}

interface DinnerList {
  staple: string[];
  nostaple: string[];
}

const defaultDinnerList:DinnerList = {
  staple: [],
  nostaple: [],
};

export function Index() {
  const [dinnerList, setDinnerList] = useState<DinnerList>(defaultDinnerList);

  const handleClick = () => {
    const list = getList();
    const { staple, nostaple } = list;
    setDinnerList({ staple: getStaples(staple, 1), nostaple: getNoStaples(nostaple, 2) });
  };

  return (
    <div className='dinner-index'>
      <h1>今天吃什么?</h1>
      <div>
        <Button type='primary' onClick={handleClick}>
          点菜
        </Button>
      </div>
      <ul>
        {dinnerList.staple.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <ul>
        {dinnerList.nostaple.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Index;
