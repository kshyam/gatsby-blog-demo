import React from 'react';

import img1 from '../assets/images/features/feature1.gif';
import img2 from '../assets/images/features/feature2.png';
import img3 from '../assets/images/features/feature3.gif';
import Feature from './common/feature';

const content1 = {
    number: '01',
    title: 'Fastest CI/CD',
    direction: 'row',
    desc: 'We Have Fastest CI/CD in the Market\nthat supports developers/devops to\nwork with full potential',
    features: [
        'The state-of-the-art anti-spoofing techniques leverage the ability of control.',
        'Based on clues from the training set images.'
    ],
    img: img1
};

const content2 = {
    number: '02',
    title: 'GitOps over kubernetes',
    direction: 'row-reverse',
    desc: 'We Have Fastest CI/CD in the Market\nthat supports developers.',
    features: [
        'The state-of-the-art anti-spoofing techniques leverage the ability of control.',
        'Based on clues from the training set images.'
    ],
    img: img2
};

const content3 = {
    number: '03',
    title: 'Hosted/Managed CI/CD tools',
    direction: 'row',
    desc: 'We Have Fastest CI/CD in the Market\nthat supports developers.',
    features: [
        'The state-of-the-art anti-spoofing techniques leverage the ability of control.',
        'Based on clues from the training set images.'
    ],
    img: img3
};

export default function FeaturesContainer() {
    return (
        <>
            <Feature content={content1} />
            <Feature content={content2} />
            <Feature content={content3} />
        </>
    );
}
