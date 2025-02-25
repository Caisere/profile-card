import React from 'react'

const SkillList = () => {

    return (
        <div className='skills'>
            <Skills skill='HTML+CSS' emoji='😩' bgColor='yellowgreen' />
            {/* <Skills skill='CSS Framework(Tailwind CSS)' emoji='😩' bgColor='yellow' /> */}
            <Skills skill='JavaScript' emoji='😭'  bgColor='yellow' />
            <Skills skill='React' emoji='😒' bgColor='skyblue' />
            <Skills skill='Git and Github' emoji='😏' bgColor='orangered'/>
        </div>
    )
}


function Skills (props) {
    // const styles = {
    //     backgroundColor: '{props.bgColor}',
    //     display: 'flex',
    //     gap: '10px',
    //     textAlign: 'center',
    //     justifyContent: 'center'
    // }

    return (
        <div style={{backgroundColor: props.bgColor, display: 'flex', gap: '10px', textAlign: 'center', justifyContent: 'center', padding: '.2rem'}}>
            <span >{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

export default SkillList