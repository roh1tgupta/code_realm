import axios from 'axios';

export function addUser(user) {
  return axios.put('/add', {...user}).then(res => console.log(res)).catch((ee) => console.log(ee));
}

export function deleteUser(id) {
  return axios.delete(`/delete/${id}`).then(res => console.log(res)).catch((ee) => console.log(ee));
}

export function updateInfo(info) {
  return axios.patch(`http://localhost:3000/globantAssign/update`, {...info}).then(res => console.log(res)).catch((ee) => console.log(ee));
}

export function getLastId() {
  return axios.get(`http://localhost:3000/globantAssign/lastId`).then(res => {console.log(res); return res.data[0];}).catch((ee) => console.log(ee));
}