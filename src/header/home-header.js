import './home-header.scss';
import React, {useState} from 'react';
import github from '../github.png';
import Close from '@material-ui/icons/Close';

export const HomeHeader = () => {
    const [showContactCard, toggleContactCard] = useState(false);

    const style = showContactCard ? 'grid-with-contact-card' : 'initial-grid';

    return (
        <div className='home-app-header'>
            <div className={`title-container ${style}`}>
                <div className='title'>Applications & Playground</div>
                {showContactCard && (
                    <div className='contact-card'>
                        <span onClick={() => toggleContactCard(false)}>
                            <Close fontSize='large' />
                        </span>
                        <div className='author-info'>
                            <div className='author'> Created by Sai Vikas Gopal </div>
                            <div className='links'>
                                <a href='https://github.com/saivikas7875' target='_blank' rel='noopener noreferrer'>
                                    <img src={github} alt='Github link' />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {!showContactCard && (
                    <div className='author-info' onClick={() => toggleContactCard(true)}>
                        Information about me!
                    </div>
                )}
            </div>
        </div>
    );
};
