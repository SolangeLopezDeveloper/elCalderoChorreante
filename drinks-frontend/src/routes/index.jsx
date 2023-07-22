import { /* BrowserRouter, */ Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/Login'
import { Cervezas } from '../pages/Productos/Cervezas'
import { Vinos } from '../pages/Productos/Vinos'
import { Licores } from '../pages/Productos/Licores'
import { Picadas } from '../pages/Productos/Picadas'
import { Promos } from '../pages/Productos/Promos'
import { Productos } from '../pages/Productos'
import Register from '../pages/Register'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Profile } from '../pages/Profile'
import { Bienvenida } from '../pages/Bienvenida'

export const AppRoutes = () => {
  return (

    <Routes>

  <Route exact path="/" element={<Bienvenida />} /> 
   <Route path='/homeSearch' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<ProtectedRoutes />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/productos" element={<Productos />} />
      <Route path="/cervezas" element={<Cervezas />} />
      <Route path="/vinos" element={<Vinos />} />
      <Route path="/licores" element={<Licores />} />
      <Route path="/picadas" element={<Picadas />} />
      <Route path="/promos" element={<Promos />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

  )
}
