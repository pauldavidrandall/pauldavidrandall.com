import React from 'react';
import './style.css';

const ParallaxExample = () => {
        return(
                <div id="ParallaxExample">
                    <div id="PEintro" className="peSlide">
                        <h1>Parallax Scrolling Example</h1>
                    </div>
                    <div id="PEslide1" className="peSlide">
                        <h1>Slide 1</h1>
                    </div>
                    <div id="PEslide2" className="peSlide">
                        <h1>Done with CSS only!</h1>
                    </div>
                    <div id="PEslide3" className="peSlide">
                        <h1>Slide 3</h1>
                        <p>This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.
                        This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.</p>
                        <p>This is a paragraph. It has 4 sentaces in it. That is all, but there's more. It repeats again in a second.</p>
                    </div>
                    <div id="PEslide4" className="peSlide">
                        <h1>Slide 4</h1>
                    </div>
                    <div id="PEslide5" className="peSlide">
                        <h1>Slide 5</h1>
                    </div>
                    <div id="PEslide6" className="peSlide">
                        <h1>Slide 6</h1>
                    </div>
                    <div id="footer" className="footer">
                        <p>Copyright 2018 Paul David Randall</p>
                    </div>
                </div>
        )
    }

export default ParallaxExample;