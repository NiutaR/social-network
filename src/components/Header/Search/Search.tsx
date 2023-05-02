import React from "react";
import s from './Search.module.css';
import { Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const Search: React.FC = () => {
  const onSearch = (value: string) => console.log(value);
  
  return (
    <div className={s.search}>
      
      <Space>
        <Input.Search
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          enterButton={<SearchOutlined />}
        />
      </Space>
    </div>
  );
}

export default Search;
