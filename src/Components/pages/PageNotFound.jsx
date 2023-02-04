import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div style={{color:"#596f91", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
      <h3 style={{marginTop:"60px"}}>Error 404: Page not found</h3>
      <Link to={"/"} style={{color:"#596f91", textDecoration:"underline"}}><h6>Volver al catálogo</h6></Link>
    </div>
  )
}