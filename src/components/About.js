import * as React from "react"
import Container from '@mui/material/Container';
import { useMediaQuery } from 'react-responsive'
import MobileMenu from "../components/mobileMenu";
import Link from '@mui/material/Link';
import me from "../images/canyoneering.jpeg"

const menubar = {
    "display": "flex",
    "justify-content": "space-between"
  }

const AboutMeHeader ={
    color: "DarkOliveGreen",
    marginTop: 21,
    marginBottom: 21,
    fontSize: "3em"
  }
  
  const AboutMeLinks = {
    color: "DarkOliveGreen",
    marginTop: 21,
    marginBottom: 21,
    padding: 20,
    lineHeight: "48px",
    fontSize: "1.4em"
  }


const lucas = {
    "height": "200px",
    borderRadius: 100,
    "width": "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }

  const lucasDiv={
    paddingTop:100,
  }

  const big = {
    fontSize: "1.6em",
    color: "DarkOliveGreen",
    fontFamily: "TimesNewRoman"
  }
  
  const paragraph = {
    // marginRight: 30,
    // marginLeft: 30,
    fontSize: "1.4em"
  }

function About () {

    const isMobile = useMediaQuery({query: "(max-width: 480px)"})

return (<Container>

<div style={lucasDiv}>
    <img style={lucas} src={me} alt="me canyoneering down a waterfall" />
</div>

<div style={menubar}>
  
  <h1 style={AboutMeHeader}>About Me</h1>
    {isMobile ?
    <MobileMenu />
    :
      <>
    <Link href="#projects" underline="hover" style={AboutMeLinks}>Projects</Link>
    {/* <Link href="/tech-blog" underline="hover" style={AboutMeLinks}>Tech Blog</Link>
    <Link href="/travel-blog" underline="hover" style={AboutMeLinks}>Travel Blog</Link> */}
    </>
  }
</div>
<Container maxWidth="sm">
  <p style={paragraph}><span style={big}>I</span> am a fullstack web and mobile developer. I've graduated from the British Columbia Institute of Technology with a Certificate in Web Programming. I have experience with Javascript, C#, React, Gatsby (that runs this site), Node JS and Mongo. Just to name a few. </p>
  <p style={paragraph}><span style={big}>M</span>y background is in physics and I have a bachelor's in physics from UBC. I've always loved math and learning how things work. Physics combined those two passions but, with physics you can spend your entire life working on something and not get anywhere or with theoretical physics you can be wrong about your life's work. Therefore, I've become obsessed with pragmatic progress. I just wanna get work done and build things. This is why I'm drawn to computer science. </p>
</Container>
</Container>
)}

export default About;