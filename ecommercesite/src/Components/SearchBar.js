import React from 'react';
import Form from 'react-bootstrap/Form';
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar() {
  return (
    <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{width:"50%", marginLeft:700, marginTop:20 }}
                  />
                  <AiOutlineSearch style={{marginTop:20, fontSize:35}}></AiOutlineSearch>
                </Form>
  )
}

export default SearchBar