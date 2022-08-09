import React from 'react'
import Modal from '../../../UI/Modal/Modal'
import classes from "./AboutModal.module.css"

const AboutModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <h1>My Journey</h1>
            <p>
                My career started in the events industry after graduated from the IFAPME (performing arts school based in Belgium) as a light technician. I then worked as a light technician for 5 years, creating and designing light shows for concerts, festivals and other events. I also oversaw the maintenance of the lighting system. During this time I had the opportunity to work with a variety of clients and spearheaded the creation of new projects. I also learned a lot about technology, how to use it to solve problems, and I developped my managerial skills.
            </p>
            <p>
                After those 5 years in the event industry, I decided to move to the UK. Once in London and I found a job in the hospitality industy in order to improve my English, then ended up I running 2 successfull resturants where I had to manage over 50 staff and look after the business. Even if I enjoyed the job, it felt like something was missing. 
            </p>
            <p>
                That is why last year, I decided to go back to university to study computer science. I graduated in 2022 with a license in computer science with a focus in web development. During this year of study, I learned a several new technologies including python, javascript etc. and I was able to work on several projects (a online game, a bar app & many more) that you can see more in details in my portefolio.
                I found a new passion for web development and discovered I liked to create things that people can use. I am currently looking for a new opportunity in tech, either as a web developper or as a software developer. I'm passionate about delivering the best user experience and I'm always looking for new challenges to solve. 
            </p>
            <p>
                Feel free to get in touch using the contact form or at nypels.alexandre@outlook.com if you have more questions!
            </p>
        </div>
    </Modal>
  )
}

export default AboutModal