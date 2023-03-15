import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export const Contact = () => {
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")
    const sendContact = (e) => {
        e.preventDefault()
        const data = {name, email, body}
        console.log(data)
        setName("")
        setEmail("")
        setBody("")
        setShowForm(false)
        inform()
    }
    const inform = () => toast.success("Message sent", {
    position:"top-right"
  })
  return (
    <>
    <ToastContainer/>
    <section className="mt-5 pt-5 pb-4 justify-content-center">
	<h3 className="text-center">Get in Touch</h3>
	<p className="text-center w-responsive mx-auto mb-5">Do you have a message for us, feel free to get in touch with us</p>
	<div className="h-100 d-flex align-items-center justify-content-center mt-5">
		<button className="btn btn-info btn-lg m-2 justify-content-center text-center" id="contbtn" onClick={() => setShowForm(!showForm)}>
			{showForm ? <span>Hide form</span> : <span>Contact me</span> }
		</button>

	</div>
	{/* <div id="res" className="text-center">
		<div className="spinner-border text-center text-md-left" role="status" id="spinner-div">
					<button className="sr-only btn btn-primary btn-lg mt-5 text-center">Loading...</button>
				</div>
	</div> */}
    {showForm && 
    <div className="row justify-content-center contact m-3 mt-0 p-4">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={sendContact}>

                <div className="row">


                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label>Your name</label>
							<input
                            onChange={(e) => setName(e.target.value)}
                            type="text" name="name" className="form-control" value={name} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
							<label className="">Your email</label>
                            <input
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            type="text" name="email" className="form-control" required/>
                        </div>
                    </div>

                </div>

                <div className="row">


                    <div className="col-md-12">

                        <div className="md-form">
							<label >Your message</label>
                            <textarea
                            value={body} onChange={(e) => setBody(e.target.value)}
                            type="text" name="message" rows="2" required className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
				<div className="text-center text-md-left">
                	<button className="btn btn-primary btn-lg mt-5" id="sendM">Send</button>
            	</div>

            </form>
        </div>
    </div>
    }
</section>
    </>
  )
}
