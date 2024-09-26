import React from 'react'

const Createform = ()=>{
  return (
    <main id='create-form'>
        <h2>Create a new event</h2>
       <label htmlFor="">name</label>
       <input type="text" placeholder='Enter event name'/>
       <label htmlFor="">Token</label>
       <input type="text" placeholder='Enter event name'/>
       <label htmlFor="">Amount</label>
       <input type='number' min='1' placeholder='enter the no of sol'/>
       <label htmlFor="">No. of users</label>
       <input type='number' min='1' placeholder='enter the no of users'/>
       <sub>no of sol per user</sub>
       <label htmlFor="">Event image</label>
       <input type="file" accept='image/*' />
       <label htmlFor="">Description</label>
       <textarea name="" id="" placeholder='enter a description for the event'></textarea>
       <button>Create event</button>
    </main>
  )
}

export default Createform