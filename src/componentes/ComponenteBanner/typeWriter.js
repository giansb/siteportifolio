import React, { Component } from 'react';

class SeuComponente extends Component {
  componentDidMount() {
    var i = 0;
    // var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
      //console.log(document.getElementById("text").innerHTML);
    }

    typeWriter();
  }

  render() {
    return (
      <div>
        {/* Seu código JSX */}
        <div id="text"></div>
      </div>
    );
  }
}

export default SeuComponente;
