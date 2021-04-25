import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import ImageMarker from '../../images/pin.svg'
import '../../styles/pages/home.css'

function HomeMap() {
  
  return(
    <>
      <div className='homeContainer'>
        {/* <header id='header-search'>
          <input type="search" id=""/>
        </header> */}
        <MapContainer 
          center={[-8.1256917,-35.027856]} 
          zoom={15} 
          style={{ width: '100vw', height: '100vh' }}
        >
          <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
          {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}

          <Marker 
            // icon={ImageMarker}
            position={[-8.1256917,-35.027856]}
          >
            <Popup closeButton={true} className='map-popup'>
              Hello World
            </Popup>
          </Marker>
        </MapContainer>
        
      </div>
    </>
  )
}

export default HomeMap