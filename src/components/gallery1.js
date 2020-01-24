import React, { useState, useEffect } from 'react';
import Gallery from '../../node_modules/react-photo-gallery';
import Lightbox from '../../node_modules/react-images';
import {GetGallery} from '../components/apirequest.js';
import cImage from '../components/image.js';

import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Gallery1 = (props) =>
{

  const className = props.color + " centered";

  const [imageState, setImageState] = useState({
    images: [{
    }]
  });

  const [currentImageState, setCurrentImageState] = useState({
    image: 0
  });

  const [lightBoxState, setLightBoxState] = useState({
    isOpen: false
  });

  const [imagesLoadedState, setImagesLoadedState] = useState({
    imagesLoaded: 0
  });

  const styles = {
    rubberBand: {
      animation: 'x 5s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn'),
      color: 'grey',
      fontSize: 3+'em'
    }
  }

const openLightbox = (event, obj) => {
  console.log("OPEN LIGHTBOX");
  setCurrentImageState({
    image: obj.index
  });
  setLightBoxState({
    isOpen: true
  });
}
const closeLightbox = () => {
  setCurrentImageState({
    image: 0
  });
  setLightBoxState({
    isOpen: false
  });
}
const gotoPrevious = () => {
  setCurrentImageState({
    image: currentImageState.image -1
  });
}
const gotoNext = () => {
  setCurrentImageState({
    image: currentImageState.image +1
  });
}

  useEffect(() => {
    // Update the document title using the browser API
    GetGallery(props.category).then(data => {
      //console.log({ message: 'Request received!', data })
      var count = data.length;
      var cimages = [];
      data.forEach(function(picture){
        var img = new Image();
        img.src = picture.src;

        img.onload = function(){
          cimages.push(
            {
              src: img.src,
              height: picture.height,
              width: picture.width
            });

          setImagesLoadedState({
            imagesLoaded: imagesLoadedState.imagesLoaded ++
          });

          if(count == imagesLoadedState.imagesLoaded){
            console.log("SETTING THE IMAGES");
            setImageState({
              images: data
            });
          }
        }

      });
    //  console.log("img: "+imageState.images[0].description);
    });
  },[]);

  const test = (event,obj) => {
    alert("ahoy");
  }

  const GalleryMod = () => {
    if(imageState.images.length > 1){
      return (
        <span>
          <Gallery photos={imageState.images} direction={"column"} onClick={openLightbox} />
          <Lightbox images={imageState.images}
              onClose={closeLightbox}
              onClickPrev={gotoPrevious}
              onClickNext={gotoNext}
              currentImage={currentImageState.image}
              isOpen={lightBoxState.isOpen}
              discourageDownloads={true}
          />
        </span>
      );
    }
    else{
      return (
        <StyleRoot>
          <h1 style={styles.rubberBand}>LOADING...</h1>
        </StyleRoot>
      );
    }
  }

  return(
    <section className={className}>
        <div className="container">
          <div className="customGallery">
            {
              imageState.images.length > 1
              ?       <span style={styles.rubberBand}>
                        <Gallery photos={imageState.images} direction={"column"} onClick={openLightbox} renderImage={cImage} />
                        <Lightbox
                            images={imageState.images}
                            onClose={closeLightbox}
                            onClickPrev={gotoPrevious}
                            onClickNext={gotoNext}
                            currentImage={currentImageState.image}
                            isOpen={lightBoxState.isOpen}
                        />
                      </span>
              :      <StyleRoot>
                        <h1 style={styles.rubberBand}>LOADING...</h1>
                    </StyleRoot>
            }

          </div>
        </div>
    </section>
  );
}

export default Gallery1
