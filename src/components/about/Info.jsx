import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">R & D Intern</span>
            </div>

            <div className="about__box">
                <i class='bx bx-award about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4+ Projects</span>
            </div>

            <div className="about__box">
                <i class='bx bx-code-alt about__icon' ></i>
                <h3 className="about__title">Leetcode</h3>
                <span className="about__subtitle">100+ Solved</span>
            </div>
        </div>
    )
}

export default Info