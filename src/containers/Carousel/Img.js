import React from 'react'

export const Items = () => {
    const arrayimg = [ 
    <img src="https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_1280.jpg" />
];

    return (
        <>
            {arrayimg.map( (props) => <ol> {props} </ol> )}
        </>
    )
}

export const TitletText = () => {
    const arraytitletext = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
    return (
        <>
            {arraytitletext.map( (props) => <ol> {props} </ol> )}
        </>
    )
}

export const Text = () => {
    const arraytext = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
    return (
        <>
            {arraytext.map( (props) => <ol> {props} </ol> )}
        </>
    )
}