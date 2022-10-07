import './contact.css'



const Contact = () => {
    return(
        <>
        <h2>Contact Us</h2>
        <form>      
            <input name="name" type="text" class="feedback-input" placeholder="FullNames" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
   </>
    )
}
export default Contact;