import './contact.css'



const Contact = () => {
    return(
        <>
        <h2>Contact Us</h2>
        <form>      
            <input name="name" type="text" className="feedback-input" placeholder="FullNames" />   
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="What project do you want to develop we can help"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
   </>
    )
}
export default Contact;