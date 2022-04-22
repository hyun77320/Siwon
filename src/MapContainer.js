import React, { useEffect, useState } from 'react'; //eslint-disable-line no-unused-vars

const { kakao } = window;

const MapContainer = () => {
  const [inputText, setInputText] = useState('');
  const onChange = (e) => {
    setInputText(e.target.value)
    searchPlaces(e.target.value)
  }
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
      <div>
        <input onChange={onChange} value={inputText}/>
        <button>검색하기</button>
      </div>
    </>
  );  
}

function searchPlaces(keyword) {
  const ps = new kakao.maps.services.Places();  

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      console.log(keyword)
      return false;
  }

  // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  ps.keywordSearch( keyword, placesSearchCB); 
}

function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {

      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      console.log(data)

  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

      alert('검색 결과가 존재하지 않습니다.');
      return;

  } else if (status === kakao.maps.services.Status.ERROR) {

      alert('검색 결과 중 오류가 발생했습니다.');
      return;

  }
}

export default MapContainer;