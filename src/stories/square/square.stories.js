import React from 'react';

import {Square} from '../../components/button/Square';

export default {
    title: 'Dev1/Square',
    component: Square
}

const Template = (args) => <Square {...args}/>

export const SampleSquare = Template.bind({});
SampleSquare.args = {
    height: 100,
    width: 100,
    border: 'thin',
    background: 'red'
}

export const SmallSquare = Template.bind({});
SampleSquare.args = {
    height: 50,
    width: 50,
    border: 'thin',
    background: 'yellow'
}

export const MediumSquare = Template.bind({});
SampleSquare.args = {
    height: 100,
    width: 100,
    border: 'medium',
    background: 'green'
}

export const LargeSquare = Template.bind({});
SampleSquare.args = {
    height: 150,
    width: 150,
    border: 'thick',
    background: 'blue'
}