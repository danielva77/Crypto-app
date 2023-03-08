import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 
import Footer from '../Footer/Footer';
import "./Detalles.css"
Chart.register(LineController, CategoryScale, LineElement, PointElement, LinearScale, Title);



function Detalles() {
    const [mercado, setMercado] = useState([])
    const [props, setProps] = useState({})

    const id = useParams().id

    useEffect(() => {
        const getMarket = async () => {
            try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
                const detail = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
                const detalle = detail.data
                const variacion = res.data.prices.map(e => e[1])
                setMercado(variacion)
                setProps(detalle)
            } catch (error) {
                console.log("Error de detalle", error)
            }
        }
        getMarket()
      },[id])

      console.log("detallle",props)

      useEffect(() => {
    if(mercado.length>0){
        var ctx = document.getElementById('myChart').getContext('2d');
        if (window.chartInstance && window.chartInstance !== null) {
            window.chartInstance.destroy();
          }
          window.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                datasets: [{
                    label: 'Precio',
                    data: mercado,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgb(255, 99, 132, 0.1)',
                }]
            },
            options: {}
        });
        }
    }, [mercado]);
  return (
    <div>
      <div class="container mb-5">
    { JSON.stringify(props) !== '{}'? <div className='my-6'>
      <div className='flex gap-2 items-center'>
        <img src={props.image.small} alt={props.name} />
        <h1 className='text-2xl mb-2 capitalize font-bold'>{props.name}</h1>
      </div>
      <p className='mt-6 text-gray-500' dangerouslySetInnerHTML={{ __html: props.description.en }}></p>
    </div> : <h1>Cargando ...</h1>}
    <canvas id="myChart"></canvas>
    <Link to="/mercado"><button type = "button" class = "btn btn-green mt-2">Volver</button></Link>
    </div>
    <div class="margingeneral"></div>
    <Footer/>
    </div>
  )
}

export default Detalles