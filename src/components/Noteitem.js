import React from 'react'

const Noteitem = (props) => {
  const { note } = props
  return (
    <div className='col-md-3 my-3'>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, adipisci amet repellendus maiores minima magni obcaecati nobis similique vitae consectetur! Omnis, modi possimus. Voluptates cupiditate officiis odit aspernatur optio ea?</p>
      </div>
    </div>
        </div>
  )
}

export default Noteitem