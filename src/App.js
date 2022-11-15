// // // import './App.css';
// // // import Register from './components/Register';
// // // import Login from './components/Login';
// // // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import { Component } from 'react';


// // class App extends Component {
// //   render() {
// //     return (
// //       //   <BrowserRouter>
// //       //   <div class='box'>
// //       //     <Routes>
// //       //       <Route index element={<Login />} />
// //       //       <Route path="Register" element={<Register />} />
// //       //     </Routes>
// //       //     {/* <Register/> */}
// //       //   </div>
// //       // </BrowserRouter>

// //       <>
// //         <center><h1>SELAMAT DATANG!!</h1></center>
// //         <marquee><h1>HELLO WORLD!!</h1></marquee>
// //       </>
// //     );
// //   }
// // }

// // export default App;

// // PROPS

// // import React, { Component } from 'react'
// // import { Card } from 'react-bootstrap';
// // import Biodata from './Tabel';
// // import './App.css'

// // CHILD
// // function Bio(props) {
// //   return ( 
// //     <>
// //       <table className='tabel'>

// //         <Baris judul='Nama'/>
// //         {/* <tr>
// //           <th>NIS</th>
// //           <td>:</td>
// //           <td>{props.nis}</td>
// //         </tr>

// //         <tr>
// //           <th>NAMA</th>
// //           <td>:</td>
// //           <td>{props.nama}</td>
// //         </tr>

// //         <tr>
// //           <th>JURUSAN</th>
// //           <td>:</td>
// //           <td>{props.jurusan}</td>
// //         </tr> */}
// //       </table>
// //     </>

// //    );
// // }

// // function Hello(props) {
// //   return ( 
// //     <>
// //       <h1>HALO {props.nama}</h1>
// //     </>
// //    );
// // }

// // function Baris(props) {
// //   return ( 
// //     <tr>
// //       <td>{props.label}</td>
// //       <td>:</td>
// //       <td>{props.isi}</td>
// //     </tr>
// //    );
// // }


// // // PARENT
// // class App extends Component {
// //   // state = {  } 
// //   render() { 
// //     return (
// //       <>
// //         <Biodata />

// //         {/* <Hello nama='FARIZ' /> */}
// //         {/* <Hello nama='B' />
// //         <Hello nama='C'/>
// //         <Hello nama='D'/> */}
        
// //         {/* <Biodata nis='3363129201' nama='Fariz' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Akbar' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='David' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Zihad' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Rudio' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Iqbal' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Arel' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Tirta' jurusan='RPL' />
// //         <Biodata nis='3363129201' nama='Amar' jurusan='RPL'/>
// //         <Biodata nis='3363129201' nama='Nopal' jurusan='TKJ' />
// //         <Biodata nis='3363129201' nama='Jepy' jurusan='TKJ' />
// //         <Biodata nis='3363129201' nama='Arya' jurusan='TKJ' />
// //         <Biodata nis='3363129201' nama='' jurusan='TKJ'/> */}
// //       </>

// //     );
// //   }
// // }
 
// // export default App;

// // PROPS END

import React, { Component } from 'react'

// const Kartu = (props) => {
//   return (
//     <>
//       <h1>{props.nama}</h1>
//     </>
//   )
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import Produk from './components/images/axioo.jpg';
import './App.css';

function Cartu(props) {
  return (
    <div className='card text-center mx-auto'>
    <img src={Produk} class="card-img-top"/>
    <div className='card-body bg-light'>
        <h5 id='nama' className='card-title'><b>{props.namabarang}</b></h5>
        <p id='harga' className='card-text text-danger'>{props.harga}</p>
        <hr />
        <div className='row'>
          </div>
  </div>
</div >
);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'AKBAR',
      sekolah: 'SMKS TARUNA PERSADA DUMAI',
      jurusan: 'PPLG',
      alamat: 'PLANET MARLAN',
      harga: 'Rp.25.000.000',
      namabarang: 'Axioo Akbar 32GB/2TB | RTX 3070 8GB',
      jumlah: 0,
      ht: 25000000,
      total: 0,
    };
  }
  Tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      total: this.state.ht * (this.state.jumlah +1)
    });
  }

Kurang = () => {
    if (this.state.jumlah > 0)
    {
      this.setState({
      jumlah: this.state.jumlah - 1,
      total: this.state.ht * (this.state.jumlah -1)
    });
    }
}
  
  render() { 
      return ( 
        <div>

          {/* className='bg-dark text-light p-5 m-5' */}
          
          <Cartu namabarang={this.state.namabarang} harga={this.state.harga} />
          <div id='butt' className='text-center mx-auto mt-2 row mt-4'>
            <div className='col'>
              <button onClick={this.Tambah}>+</button>
            </div>
            <div id='total' className='col'>
              <h4>Total Barang : {this.state.jumlah}</h4>
              <h4>Total Bayar : Rp {this.state.total}</h4>
            </div>
            <div className='col'>
              <button onClick={this.Kurang}>-</button>
              </div>
            </div>
          
          {/* <h1>Nama : {this.state.nama}</h1>
          <h1>Sekolah : {this.state.sekolah}</h1>
          <h1>Jurusan : {this.state.jurusan}</h1>
          <h1>Alamat : {this.state.alamat}</h1> */}
        </div>
     );
  }
}
 
export default App;
      
// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama: 'RPL',
//       jumlah: 0,
//     }
//   }

//   Ubah  = () => {
//   this.setState({nama : 'Rekayasa Perangkat Lunak'})
//   }

//   Tambah = () => {
//     this.setState({ jumlah: this.state.jumlah+1});
//   }

//   Kurang = () => {
//     if (this.state.jumlah > 0)
//     { this.setState({ jumlah: this.state.jumlah - 1 }); }
//   }


//   render() {
//     return(
//       <div className='m-3 text-center'>
//         <h1>{this.state.nama}</h1>
//         {/* <button className='btn btn-success' onClick={() => this.Ubah()}>ubah</button> */}
//         {/* <button className='btn btn-success m-3' onClick={this.Ubah}>ubah</button> */}
//         {/* <button className='btn btn-success m-2' onClick={()=>this.setState({nama:'RPL'})}>ubah lagi</button> */}

//         <h1>{this.state.jumlah}</h1>
//         <button onClick={this.Tambah}>tambah</button>
//         <button className='m-2' onClick={this.Kurang}>kurang</button>
//       </div>
//      );
//   }
// }
 
// export default App;
