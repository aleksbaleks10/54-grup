const myElement = (
<div>
<h1 id="h1-main">Main heading</h1>

<p style={{"color": "red", "backgroundColor": "black"}}>text</p>

<p style={{"color": "blue", "backgroundColor": "black"}}>text</p>

<h2 id="h2-1">heading 2.1</h2>

<h2 id="h2-2">heading 2.2</h2>
</div>
);


const student = {
  name: "ალექსანდრე",
  hoby: "programming",
  car: "supra mk4"
};

const element = (
  <div>
    <p>{student.name}</p>
    <p>{student.hoby}</p>
    <p>{student.car}</p>
  </div>
);

