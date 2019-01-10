import React from 'react';
import './style.css';

const ParallaxExample = () => {
        return(
                <body id="ParallaxExample">
                    <div id="intro" class="peSlide">
                        <h1>Parallax Scrolling Example</h1>
                    </div>
                    <div id="peslide1" class="peSlide">
                        <h1>Slide 1</h1>
                    </div>
                    <div id="peslide2" class="peSlide">
                        <h1>Done with CSS only!</h1>
                    </div>
                    <div id="peslide3" class="peSlide">
                        <h1>Slide 3</h1>
                        <p>This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.
                        This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.</p>
                        <p>This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.</p>
                    </div>
                    <div id="peslide4" class="peSlide">
                        <h1>Slide 4</h1>
                    </div>
                    <div id="peslide5" class="peSlide">
                        <h1>Slide 5</h1>
                    </div>
                    <div id="peslide6" class="peSlide">
                        <h1>Slide 6</h1>
                    </div>
                    <div id="footer" class="footer">
                        <p>Copyright 2018 Paul David Randall</p>
                    </div>
                </body>
        )
    }

export default ParallaxExample;