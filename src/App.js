import './App.css';
import Swal from 'sweetalert2';

function App() {

  const Course = [
    {
      name: 'Math',
      Teacher: 'Mohammad',
      filename: 'Math.pdf',
      bg: '#FFFFF',
      color: '#000'
    },
    {
      name: 'English',
      Teacher: 'Mohammad',
      filename: 'English.pdf',
      bg: 'yellow',
      color: '#FFFFF'
    },
    {
      name: 'Arabic',
      Teacher: 'Mohammad',
      filename: 'Arabic.pdf',
      bg: 'blue',
      color: '#FFFFF'
    }
  ]

  const showDetails = (name) => {
    let cc = Course.filter(x => x.name == name)[0];

    Swal.fire({
      title: `<strong>${cc.name}</strong>`,
      html: `<br /> <h3>Instructor: <strong>${cc.Teacher}</strong></h3><br /> <h3>Download files: </h3><br /> <a href='${cc.filename}' download>File 1</a> <br /> <a href='${cc.filename}' download>File 2</a> <br /> <a href='${cc.filename}' download>File 3</a> <br /> <a href='${cc.filename}' download>File 4</a> <br />`,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok!',
    })
  }

  return (
    <div className="wrapper">
    <header>
     <h1>Cointify</h1>
     </header>
     <div className="container">
       <div className="container2" id="container">
         {
           Course.map((item) => {
             return <div className="box" style={{backgroundColor: item.bg , color: item.color}} onClick={() => {showDetails(item.name)}}><h2>{item.name}</h2></div>
           })
         }
       </div>
     </div>
 </div>
  );
}

export default App;
