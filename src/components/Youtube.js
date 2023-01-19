import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";


function  YoutubeEmbed({ embedId }) {
    const isTabletOrDesktop = useMediaQuery({query: '(min-width: 480px)' })


    return (
    <iframe
      width={isTabletOrDesktop ? "853" : "300"}
      height={isTabletOrDesktop ? "480" : "200"}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    )
};


export default YoutubeEmbed;