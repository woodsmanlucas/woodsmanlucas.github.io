import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';
import sonarMusic from "../images/sonar.png";
import blackJack from "../images/BlackJack.png";
import movie from "../images/movie.png";
import mandM from "../images/MandM.png";
import SonarSwift from "../images/SonarSwift.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import YoutubeEmbed from './Youtube';


const AboutMeHeader ={
    color: "DarkOliveGreen",
    marginTop: 21,
    marginBottom: 21,
    fontSize: "3em"
  }

  const projectTextDiv = {
    width: 400,
  }
  
  const projectDiv = {
    "display": "flex",
    "justify-content": "space-around",
    paddingBottom: 80
  }
  
  const projectDivInternal = {
    width: 250,
    "display": "flex",
    "justify-content": "space-between"
  }
  
  const projectImage ={
    height: "300px",
    width: "auto"
  }



function Projects () {
    const isTabletOrDesktop = useMediaQuery({query: '(min-width: 480px)' })
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    return (
        <Container>
        <h1 style={AboutMeHeader} id="projects">Projects</h1>
{/*   
        <div style={projectDiv}>
            <div style={projectTextDiv} >
              <h2>Sonar Music Network</h2>
              <p>A team project with <a href="https://www.eric-bourne.com/">Eric Bourne</a>. The goal of the project was to build a website for musicians to find other musicians to jam with. It's still a bit of a work in progress but I intend to add a discover page soon. Unfortunately the source code is proprietary so I can't share it with you.</p>
              <div style={projectDivInternal}>
                <Button variant="contained" href="https://sonarmusic.social">See Live</Button>
              </div>
            </div>
            {isTabletOrDesktop &&
            <a href="https://www.sonarmusic.social/" >
              <img style={projectImage} src={sonarMusic} alt="Sonar Music Network website" />
            </a>
  }
        </div> */}
  
        {/* <br />
  
        <div style={projectDiv}>
            <div style={projectTextDiv}>
              <h2>React Movie Website</h2>
              <p>A team project with <a href="https://www.linkedin.com/in/gomezfausto/">Fausto Gomez</a>. We built a website for finding movies in React. We used the <a href="https://www.themovieDB.org">movie database api</a> to find the latest releases so the site is always up to date.</p>
              <div style={projectDivInternal}>
                <Button variant="contained" href="https://react-movie-website.herokuapp.com">See Live</Button>
                <Button variant="outlined" href="https://github.com/woodsmanlucas/react-movie-website">GitHub</Button>
              </div>
            </div>
            {isTabletOrDesktop &&
            <a href="https://react-movie-website.herokuapp.com" >
              <img style={projectImage} src={movie} alt="Movie Website in React" />
            </a>
            }
        </div> */}
  
        <br />

        <div style={projectDiv}>
          {isTabletOrDesktop &&
            <a href="https://github.com/woodsmanlucas/m-m-predictore/">
              <img style={projectImage} src={mandM} alt="some M and M's" />
            </a>}
            <div style={projectTextDiv}>
              <h2>M and M predictor</h2>
              <p>A solo project with some image recognition. Recognizes M and M's for 100x100 images.</p>
              <div style={projectDivInternal}>
                <Button variant="contained" href="https://github.com/woodsmanlucas/m-m-predictor">GitHub</Button>
              </div>
            </div> 

        </div> 
  
        <div style={projectDiv}>
            <div style={projectTextDiv}>
              <h2>BlackJack</h2>
              <p>One of my older projects. A game of BlackJack made in Vanilla Javascript with a dash of SCSS for styling.</p>
              <div style={projectDivInternal}>
                <Button variant="contained" href="https://woodsmanlucas.github.io/BlackJack/">See Live</Button>
                <Button variant="outlined" href="https://github.com/woodsmanlucas/BlackJack">GitHub</Button>
              </div>
            </div>
            {isTabletOrDesktop &&
            <a href="https://woodsmanlucas.github.io/BlackJack/">
              <img style={projectImage} src={blackJack} alt="BlackJack in Vanilla Javascript" />
            </a>}
        </div>
        <div style={projectDiv}>
        {isTabletOrDesktop &&
            <a href="https://github.com/woodsmanlucas/SonarSwift">
              <img style={projectImage} src={SonarSwift} alt="The app for the sonar music network" />
            </a>}
            <div style={projectTextDiv}>
              <h2>Sonar Music Network App</h2>
              <p>An app for musicians to find bands. I built the frontend for this over the course of a month while working 20 hours a week at Safeway. I had never done swiftUI before and the whole thing was a blast!</p>
              <div style={projectDivInternal}>               
                <Button variant="contained" onClick={handleClickOpen} >See Demo Video</Button>
                <Button variant="contained" href="https://github.com/woodsmanlucas/SonarSwift">GitHub</Button>
              </div>
            </div>

        </div>

       <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth="md"
          aria-labelledby="alert-dialog-title"
          aria-describedby='alert-dialog-description'
          >
          <DialogContent>
            <YoutubeEmbed embedId="TuS_z2RA4C8" />
          </DialogContent>
         </Dialog> 
        {/* <div style={projectDiv}>
            <div style={projectTextDiv}>
              <h2>React Movie Website</h2>
              <p>A team project with <a href="https://www.linkedin.com/in/gomezfausto/">Fausto Gomez</a>. We built a website for finding movies in React. We used the <a href="https://www.themovieDB.org">movie database api</a> to find the latest releases so the site is always up to date.</p>
              <div style={projectDivInternal}>
                <Button variant="contained" href="https://github.com/woodsmanlucas/react-movie-website">GitHub</Button>
              </div>
            </div> 
            {isTabletOrDesktop &&
            <a href="https://github.com/woodsmanlucas/react-movie-website/">
              <img style={projectImage} src={movie} alt="A simple react movie website" />
            </a>}
        </div> */}
      </Container>
    )
}

export default Projects;