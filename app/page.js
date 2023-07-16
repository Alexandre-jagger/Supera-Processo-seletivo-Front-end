import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
  return (
    <body>
    <div>
      <div>
        <ul style={{ listStyle: 'none', padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <li style={{ fontWeight: 'bold', color: '#1b1c26', fontSize: '25px', marginRight: '20px', fontFamily: 'Arial', color: 'black' }}>Desafio Supera</li>
        </ul>
        <div style={{ borderBottom: '2px solid black', color: '#424e5e' }}></div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
            <p style={{ margin: '5px', fontSize: '14px', padding: '1px', fontWeight: 'bold', color: '#1b1c26' }}>Data de início:</p>
            <input type="date" style={{ borderRadius: '11px', width: '150px', height: '40px', borderWidth: '1px' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
            <p style={{ margin: '5px', fontSize: '14px', padding: '1px', fontWeight: 'bold', color: '#1b1c26' }}>Data de fim:</p>
            <input type="date" style={{ borderRadius: '11px', width: '150px', height: '40px', borderWidth: '1px' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
            <p style={{ margin: '5px', fontSize: '14px', padding: '1px', fontWeight: 'bold', color: '#1b1c26' }}>Nome do operador transacionado:</p>
            <input type="text" style={{ borderRadius: '11px', width: '250px', height: '40px', borderWidth: '1px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginTop: '30px',marginLeft: '520px'}}>
            <button style={{ borderRadius: '11px', width: '150px', height: '40px', backgroundColor: '#6F81B3', color: '#fff', border: 'none', fontWeight: 'bold' }}>Pesquisar</button>
          </div>
          <br/><br/><br/>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <table style={{ width: '75%', borderCollapse: 'separate', borderSpacing: '5', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#ABC1FF' }}>
            <thead>
              <tr>
                <th colSpan="2" style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', borderRight: '2px solid black', backgroundColor: '#ABC1FF' }}>Saldo total:</th>
                <th colSpan="2" style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', backgroundColor: '#ABC1FF' }}>Saldo no período:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', borderRight: '2px solid black', backgroundColor: '#6F81B3' }}>Dados</td>
                <td style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', borderRight: '2px solid black', backgroundColor: '#6F81B3' }}>Valencia</td>
                <td style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', borderRight: '2px solid black', backgroundColor: '#6F81B3' }}>Tipo</td>
                <td style={{ backgroundColor: '#f8f8f8', borderBottom: '2px solid black', padding: '10px', backgroundColor: '#6F81B3' }}>Nome do operador</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>14/02/2019</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>R$ 30895,46</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>depósito</td>
                <td style={{ padding: '10px' }}>Alexandre</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>12/04/2019</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>R$ 12,24</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>Transferência Entrada</td>
                <td style={{ padding: '10px' }}>Beltrano</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>11/06/2020</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>R$ -500,50</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>Transferência Saída</td>
                <td style={{ padding: '10px' }}>Azerbaijano</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>11/06/2020</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>R$ 3454,50</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>Saque</td>
                <td style={{ padding: '10px' }}>Ciclano</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>17/09/2021</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>R$ -1234,00</td>
                <td style={{ padding: '10px', borderRight: '2px solid black' }}>Transferência Saída</td>
                <td style={{ padding: '10px' }}>Fulano</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <br/><br/><br/><br/><br/>

        <div style={{ borderBottom: '2px solid black', color: '#424e5e' }}></div>

        <p style={{ fontSize: '15px', padding: '0px', fontWeight: '', color: '#424e5e', justifyContent: 'center', display: 'flex' }}>@2023 .Desafio Supera</p>
      </div>
    </div>
    </body>
  );
}

export default Page;
