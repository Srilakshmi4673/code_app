import { Link } from "react-router-dom"
import { useState } from "react"

function StudentForm() {
    const [id, setid] = useState("")
    const [sid, setSid] = useState("")
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [dateofjoining, setDateofjoining] = useState("")

    const changeSid = (e) => {
        setSid(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeCourse = (e) => {
        setCourse(e.target.value)
    }
    const changeMobile = (e) => {
        setMobile(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeDateofjoining = (e) => {
        setDateofjoining(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        let data = { id, sid, name, course, mobile, email, dateofjoining }
        fetch("https://student-app-api-i67y.onrender.com", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                alert("Data Stored Successfully.....")
                console.log(resp)
                setSid('')
                setName('')
                setCourse('')
                setMobile('')
                setEmail('')
                setDateofjoining('')
            })
            .catch((err) => {
                alert("Error: ", err)
            })
    }


    return (
        <div className="item" style={{ backgroundImage:`url(http://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Plain-HD-Photos.jpg`,backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"30px",minHeight:"100vh"}}>
            <div className="container w-25">
                <div className="card px-3 mt-5">
                    <div className="card-title text-center">
                        <h2>Student From</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Student ID</label>
                                <input value={sid} onChange={changeSid} type="Number" className="form-control" placeholder="Enter Student ID" required />
                            </div><br />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Student Name</label>
                                <input value={name} onChange={changeName} type="text" className="form-control" placeholder="Enter Student Name" required />
                            </div><br />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Student Course</label>
                                <input value={course} onChange={changeCourse} type="text" className="form-control" placeholder="Enter Student Mobile No" required />
                            </div><br />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Student Email ID</label>
                                <input value={email} onChange={changeEmail} type="email" className="form-control" placeholder="Enter Student Email ID" required />
                            </div><br />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Student Mobile no</label>
                                <input value={mobile} onChange={changeMobile} type="number" className="form-control" placeholder="Enter Student Mobile No" required />
                            </div><br />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Student City</label>
                                <input value={dateofjoining} onChange={changeDateofjoining} type="date" className="form-control" placeholder="Enter Student City" required />
                            </div><br />

                            <input type="submit" className="btn btn-primary mx-1" value="Submit" />
                            <Link to="/home" className="btn btn-danger mx-1">Back to Home</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm;