import React, { useState } from 'react';

class Table extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    let tableObjectStyle = {
      borderCollapse: "collapse",
      border: "2px solid black"
    }
    let trStyle = {
      height: "30px",
      textAlign: "center"
    }

    return (
      <div>

          <h2>CS 160 Table of contents</h2>

          <table style = {tableObjectStyle} border="1">
            <thead>
              <tr style={trStyle}>
                <th style={{width: 40 + 'px'}}>#</th>
                <th style={{width: 300 + 'px'}}>Topic</th>
                <th style={{width: 600 +'px'}}>Description</th>
                <th style={{width: 300 + 'px'}}>Lecture Notes</th>
                <th>Covered on:</th>
              </tr>
            </thead>
            <tbody>

              <tr style={trStyle}>
                <td>1</td>
                <td>Introduction</td>
                <td>Introduction to compilers, course logistics, policies</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#org4a09e48">Introduction</a></td>
                <td>Week 1</td>
              </tr>
              <tr style={trStyle}>
                <td>2</td>
                <td>Parsing</td>
                <td>Lexing and parsing to produce an AST, review of 138 and using CFG</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#orgf79ff05">Parsing</a></td>
                <td>Weeks 2-3</td>
              </tr>
              <tr style={trStyle}>
                <td>3</td>
                <td>Frontend Wrap-up</td>
                <td>Continuation on parsing, strings, blocks in C-flat</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#org9ad1912">Frontend Wrap-Up</a></td>
                <td>Week 4</td>
              </tr>
              <tr style={trStyle}>
                <td>4</td>
                <td>Code Generation</td>
                <td>Generating assembly code from Parser AST, dynamic memory allocation for C-flat</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#orga85dfba">Code Generation</a></td>
                <td>Weeks 5-6</td>
              </tr>
              <tr style={trStyle}>
                <td>5</td>
                <td>Optimization</td>
                <td>Optimizing the assembly instructions. Data flow analysis, GCSE</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#orgb5a3265">Optimization</a></td>
                <td>Weeks 7-8</td>
              </tr>
              <tr style={trStyle}>
                <td>6</td>
                <td>Garbage Collection</td>
                <td>Intro to Garbage collection in C++, Java. Building a Garbage collector for C-flat	</td>
                <td><a href="https://sites.cs.ucsb.edu/~emre/cs160/#org42dc45e">Garbage Collection</a></td>
                <td>Weeks 9-10</td>
              </tr>
              
            </tbody>
          </table>
      </div>
    );
  }
}

export default Table;