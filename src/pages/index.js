import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive'
import fog from "../images/fog.jpg";
import linkedInImage from "../images/linkedIn.svg";
import gitHubImage from "../images/GitHub-Link.png";
import oceanJPG from "../images/ocean.jpg";
import Projects from "../components/Projects";
import js from "../images/JS.png";
import react from "../images/React.png";
import csharp from "../images/csharp.png";
import DotNet from "../images/dotnet.png";
import docker from "../images/docker.png";
import gatsby from "../images/gatsby.png";
import git from "../images/git.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import swift from "../images/swift.png";
import swiftUI from "../images/swiftui.png";

import "../page.css"
import About from "../components/About"


// styles
const imageSize = {
  "width": "100vw",
  "height": "100vh",
  "object-fit": "cover",
}



const relative = {
  position: "relative",
  width: "100%",
  height: "100%",
}
const absolute = {  
  textAlign: "center",
  position: "absolute",
  top: 100,
  left: 0,
  width: "100%",
  fontSize: "2.5em"
}
const absoluteGitHub = {  
  position: "absolute",
  top: 40,
  right: 40,
}

const absoluteLinkedIn = {  
  position: "absolute",
  top: 40,
  right: 80,
}

const gitHubMobile = {  
  position: "absolute",
  top: 40,
  left: "51vw",
}

const linkedInMobile = {  
  position: "absolute",
  top: 40,
  right: "51vw",
}

const gitHub ={
  height: 20,
  width: "auto"
}

const linkedIn ={
  height: 20,
  width: "auto"
}


const green = {
  color: "DarkOliveGreen"
}



const ocean = {
  height: 300,
  width: "100vw",
  objectFit: "cover",
  objectPosition: "0px 70%",
}

const oceanText = {
  textAlign: "center",
  position: "absolute",
  top: 80,
  left: 0,
  width: "100%",
  fontSize: "2.5em",
  color: "white"
}

const oceanTextMobile = {
  textAlign: "center",
  position: "absolute",
  top: "1.4em",
  left: 0,
  width: "100%",
  fontSize: "2.5em",
  color: "white"
}

const lineBreak = {
  marginBottom: 80
}

const footerTop = {
  backgroundColor: "DarkOliveGreen",
  overflow: "auto",
  height: 500
}

const footerTopTablet = {
  backgroundColor: "DarkOliveGreen",
  overflow: "auto",
  height: 800
}

const footerTopContainer ={
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "20px 5em",
  opacity: "80%"
}

const footerBottom ={
  backgroundColor: "DarkGrey",
  height: 400
}

const footerBottomContainer = {
  display: "block",
  position: "relative",
}

const contact = {
  position: "absolute",
  top: 100,
  width: "100vw",
  textAlign: "center",
  color: "white"
}

const contactEmail = {
  position: "absolute",
  top: 200,
  right: "calc(50vw - 75px)",
  color: "darkOliveGreen",
  borderColor: "darkOliveGreen"
}

const contactEmailMobile = {
  position: "absolute",
  top: 200,
  right: "calc(50vw - 55.5px)",
  color: "darkOliveGreen",
  borderColor: "darkOliveGreen"
}

const githubFooter = {
  position: "absolute",
  top: 250,
  left: "51vw",
}

const linkedInFooter = {
  position: "absolute",
  top: 250,
  right: "51vw",
}

const copywrite = {
  backgroundColor: "black",
  height: 50
}

const copywriteText = {
  position: "absolute",
  top: 0, 
  width: "100vw",
  textAlign: "center",
  color: "white"
}

const jsIcon = {
  height: 200,
  width: "auto",
  padding: 20
}

const reactIcon = {
  height: 200,
  padding: 20,
  width: "auto"
}

const oceanMobile = {
  padding: 5,
  margin: 0
}

// markup
const IndexPage = () => {
  
  // media queries
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrDesktop = useMediaQuery({query: '(min-width: 480px)' })
  const isMobile = useMediaQuery({query: "(max-width: 480px)"})

  return (
    <React.Fragment>
    <CssBaseline />
    <title>Lucas Johnson | Developer</title>
    <div style={relative}>
    <img src={fog} alt="fog covered mountains" style={imageSize}/>
    {isTabletOrDesktop &&
    <>
    <a style={absoluteGitHub} href="https://github.com/woodsmanlucas">
    <img style={gitHub} src={gitHubImage} alt="github" />
    </a>
    <a style={absoluteLinkedIn} href="https://linkedin.com/in/lucas-johnson-77a3b7100">
      <img src={linkedInImage} alt="LinkedIn" />
    </a>
    </>
}{isMobile &&
    <>
    <a style={gitHubMobile} href="https://github.com/woodsmanlucas">
    <img style={gitHub} src={gitHubImage} alt="github" />
    </a>
    <a style={linkedInMobile} href="https://linkedin.com/in/lucas-johnson-77a3b7100">
      <img style={linkedIn} src={linkedInImage} alt="LinkedIn" />
    </a>
    </>
    }
    <h1 style={absolute}><span style={green}>Lucas Johnson </span>{isTabletOrDesktop && "-"} Software Developer</h1>
    </div>
<About/>

    <br style={lineBreak} />
    <div style={relative}>
    <img style={ocean} src={oceanJPG} alt="ocean and mountains near hong kong" />
    {isTabletOrDesktop ?
    <h1 style={oceanText}>Interested | Engaged | Capable</h1>
    :
    <div style={oceanTextMobile}> 
      <h3 style={oceanMobile}>Interested</h3>
      <h3 style={oceanMobile}>Engaged</h3>
      <h3 style={oceanMobile}>Capable</h3>
    </div>
}
</div>

<Projects />

    {isTabletOrDesktop &&
      <br style={lineBreak} />
    }


    <br style={lineBreak} />
    <br style={lineBreak} />


    {   isTabletOrMobile
 ?
    <div style={footerTopTablet}>
      <div style={footerTopContainer} >
        {/* Insert Frameworks Languages and Tools here */}
        <img style={jsIcon} src={js} alt="Javascript Icon" />
        <img style={reactIcon} src={react} alt="React Icon" />
        <img style={reactIcon} src={csharp} alt="C sharp Icon" />
        <img style={reactIcon} src={DotNet} alt="DotNet Icon" />
        {isTabletOrDesktop && 
        <>
          <img style={reactIcon} src={docker} alt="docker Icon" />
          <img style={reactIcon} src={gatsby} alt="Gatsby Icon" />
          <img style={reactIcon} src={git} alt="Git Icon" />
          <img style={reactIcon} src={mongo} alt="Mongo Leaf Icon" />
          <img style={reactIcon} src={node} alt="Node JS Icon" />
          <img style={reactIcon} src={swift} alt="Swift Icon" />
          <img style={reactIcon} src={swiftUI} alt="SwiftUI Icon" />
        </>}
      </div>
    </div>

    :     <div style={footerTop}>
    <div style={footerTopContainer} >
      {/* Insert Frameworks Languages and Tools here */}
      <img style={jsIcon} src={js} alt="Javascript Icon" />
        <img style={reactIcon} src={react} alt="React Icon" />
        <img style={reactIcon} src={csharp} alt="C sharp Icon" />
        <img style={reactIcon} src={DotNet} alt="DotNet Icon" />
        <img style={reactIcon} src={docker} alt="docker Icon" />
          <img style={reactIcon} src={gatsby} alt="Gatsby Icon" />
          <img style={reactIcon} src={git} alt="Git Icon" />
          <img style={reactIcon} src={mongo} alt="Mongo Leaf Icon" />
          <img style={reactIcon} src={node} alt="Node JS Icon" />
          <img style={reactIcon} src={swift} alt="Swift Icon" />
          <img style={reactIcon} src={swiftUI} alt="SwiftUI Icon" />
    </div>
  </div>
}

    <div style={footerBottomContainer}>
    <div style={footerBottom}></div>
    <h1 style={contact}>Contact</h1>
    {isMobile ?
      <Button variant="outlined" style={contactEmailMobile} href="mailto:lucas@sonarmusic.social" >Let's Talk</Button>
:
      <Button variant="outlined" style={contactEmail} href="mailto:lucas@sonarmusic.social" >Let's Talk</Button>}
    <a style={githubFooter} href="https://github.com/woodsmanlucas">
    <img style={gitHub} src={gitHubImage} alt="github" />
    </a>
    <a style={linkedInFooter} href="https://linkedin.com/in/lucas-johnson-77a3b7100">
      <img style={linkedIn} src={linkedInImage} alt="LinkedIn" />
    </a>
    </div>
    <div style={footerBottomContainer}>
    <div style={copywrite}></div>
    <p style={copywriteText} >© Copyright 2021. Lucas Johnson</p>
    </div>
  </React.Fragment>
  )
}

export default IndexPage
