import './home-header.scss';
import React, {useState} from 'react';
import github from '../github.png';
import twitter from '../twitter.png';
import Typography from '@material-ui/core/Typography';
import gmail from '../gmail.png';
import FlipToFront from '@material-ui/icons/FlipToFront';

export const HomeHeader = () => {
    const [showContactCard, toggleContactCard] = useState(false);

    const style = showContactCard ? 'grid-with-contact-card' : 'initial-grid';

    return (
        <header className='home-app-header'>
            <div className={`title-container ${style}`}>
                <div className='title'>
                    <span>Applications Playground</span>
                </div>
                <div className='card-container'>
                    <div className='card-wrapper'>
                        <div className='contact-card'>
                            <div className='author-info'>
                                <div
                                    className='author'
                                    onClick={() => toggleContactCard(false)}
                                    onTouchStart={() => toggleContactCard(true)}
                                >
                                    <span className='name'>I am Sai Vikas Gopal</span>
                                    <FlipToFront />
                                </div>
                                <div className='links'>
                                    <a href='https://github.com/saivikas7875' target='_blank' rel='noopener noreferrer'>
                                        <img src={github} alt='Github link' className='social-icon' />
                                    </a>
                                    <a href='https://twitter.com/saivikas_g' target='_blank' rel='noopener noreferrer'>
                                        <img src={twitter} alt='Twitter link' className='social-icon' />
                                    </a>
                                    <a href='mailto:saivikas7875@gmail.com' target='_blank' rel='noopener noreferrer'>
                                        <img src={gmail} alt='Email me' className='social-icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Typography
                            className='show-information'
                            onClick={() => toggleContactCard(true)}
                            onTouchStart={() => toggleContactCard(true)}
                            aria-expanded={showContactCard}
                            aria-label='Show more'
                        >
                            Hey there!
                        </Typography>
                    </div>
                </div>
            </div>
        </header>
    );
};
