import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <nain>
        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type='text' required placeholder='abc' />
            </div>
            <div>
                <label>Email</label>
                <input type='email' required placeholder='abc@xyz.com' />
            </div>
            <div>
                <label>Message</label>
                <input type='text' required placeholder='Tell us about your query...' />
            </div>

            <button type="submit">Send</button>
        </form>
      </nain>
    </div>
  )
}

export default Contact
