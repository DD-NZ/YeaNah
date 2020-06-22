import axios from 'axios';

export function getInitialData(){
  const apiKey = '8c364c3c1f0f4994b5cec31da2bd795f'
  const apiLink = 'https://developers.zomato.com/api/v2.1/'
  let lat = '40.7'
  let lon = '-74'
  let url =apiLink + 'geocode?lat=' + lat +"&lon=" + lon
  console.log(url)
  axios.get( url, {
    headers: {'user-key': apiKey}
  }).then(res => {
    console.log(JSON.stringify(res.data));
  })

}
