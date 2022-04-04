import React, {useEffect} from "react";

const {kakao} = window

function App() {
  useEffect(() => {
    let container = document.getElementById('map');
		let options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		let map = new kakao.maps.Map(container, options);
  })
  
  return (
    <div id="map" style={{width: '100%', height: '100vh'}}></div>
  );
}

export default App;
