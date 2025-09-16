import {useState} from 'react';

export function Contact(){
    const [name , setname] = useState("");
    const [mobile,setmobile]=useState("");
    const [precollege,setprecollege]=useState("");
    const [marks , setmarks] = useState("");
    const [branch, setbranch] = useState("");
    const [message , setmessage] = useState("");
    const Submit = (e) => {
    e.preventDefault();
    alert(`Contact form submitted!
    Your Name : ${name}
    Your Mobile No : ${mobile}
    Your Previous college Name : ${precollege}
    Your Marks : ${marks}
    Your Branch : ${branch}
    Your Message : ${message}`);
    };



    return (
      <>
       <h1>Contact Form</h1>
        <form onSubmit={Submit}>
            <label for="name">Name :</label>
            <input type="text" value={name}  onChange={(e) => setname(e.target.value)}></input><br/>
             <label for="mobile">Mobile no :</label>
            <input type="text" value={mobile} onChange={(e) => setmobile(e.target.value)}></input><br/>
             <label for="precollege">previous college Name :</label>
            <input type="text" value={precollege} onChange={(e) => setprecollege(e.target.value)}></input><br/>
             <label for="marks">Marks :</label>
             <input type="text" value={marks} onChange={(e) => setmarks(e.target.value)}></input><br/>
             <label>Choose Branch</label>
            <label>
            <input type="radio" value="CSE" onChange={(e) => setbranch(e.target.value)} />CSE</label>
            <label><input type="radio" value="CSM" onChange={(e) => setbranch(e.target.value)} />CSM</label>
            <br/>
             <label for="message">Message :</label>
            <textarea value={message} onChange={(e) => setmessage(e.target.value)}/><br/>
            <button type="submit" value={Submit}>Submit</button>
        </form>
      
      </>
    )
}
export  default Contact;