import React, { useState } from 'react';
import { AutoComplete, Form, Input } from 'antd';

const Search = () => {
  const [options, setOptions] = useState([]);


  const data = [
    {
      key: 1,
      value: 'sonu'
    }
  ]

  const onSearch = (searchText) => {
    console.log(searchText);


    setOptions(data)

  };

  const onSelect = (val, option) => {
    console.log({
      val,
      option,
    });
  };

  return (
    <Form>
      <Form.Item>
        <AutoComplete
          options={options}
          onSelect={(val, option) => onSelect(val, option)}
          onSearch={onSearch}
        >
          <Input placeholder='Search here' />
        </AutoComplete>
      </Form.Item>
    </Form>
  );
};

export default Search;
