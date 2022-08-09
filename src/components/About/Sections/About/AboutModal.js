import React from 'react'
import Modal from '../../../UI/Modal/Modal'
import classes from "./AboutModal.module.css"

const AboutModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <h1>My Journey</h1>
            <p>
                My career started in the events industry after graaduated from the IFAPME (performing arts school) as a light technician. I then worked as a light technician for 5 years, creating and designing light shows for conccerts, festivals and other events. I also oversaw the maintenance of the lighting system. During this time I had the opportunity to work with a variety of clients and spearheaded the creation of new projects. I also learned a lot about technology, how to use it to solve problems, and I developped my managerial skills.
            </p>
            <p>
                After those 5 years in the event industry, I decided to move to the UK. Once in London, I had to change my carreer and find a job in the hospitality industy. I run 2 successfull resturants where I had to manage over 50 staff and look after the bussiness. Even if I enjoyed the job, it felt like something was missing. 
            </p>
            <p>
                That's why after long time of thinking, I decided to go back to university to study computer science. I graduated in 2022 with a license in computer science with a focus in web development. During this year of study, I learned a several new technologies and I was able to work on several projects.
                I found a new passion for web development, as I like to create things that people can use. I'm currently looking for a new opportunity in tech, either as a web developper or as a software developer. I'm passionate about delivering the best user experience and I'm always looking for new challenges to solve. 
            </p>
            <p>
                Feel free to get in touch at x or nypels.alexandre@outlook.com if you have more questions!
            </p>
        </div>
    </Modal>
  )
}

export default AboutModal