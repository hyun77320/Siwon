import React, { useEffect, useState } from 'react'; //eslint-disable-line no-unused-vars

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 표시할 div 
    const options = { 
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    
    const map = new kakao.maps.Map(container, options); //eslint-disable-line no-unused-vars
  });
  
  return (
    <>
      <div id="map" style={{
        width: '100%', 
        height: '100vh'
      }}></div>
    </>
  );
}

export default MapContainer;