import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../useContext/useContext'

const Page = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = Context();
    const skills = [
        {name: 'HTML', num: '92'},
        {name: 'CSS', num: '92'},
        {name: 'Bootstrap', num: '92'},
        {name: 'DUDA', num: '90'},
        {name: 'Word[ress', num: '82'},
        {name: 'Figma', num: '75'},
        {name: 'PS', num: '86'},
        {name: 'ReactJs', num: '70'},
        {name: 'GitHub', num: '73'},
        {name: 'MongoDB', num: '71'}
    ]
    return (
        <>
       <section className='hero' style={{paddingBlock:'0'}}>
            <div className='row flex'>
                <div className='col-7 flex' style={{alignItems:'center'}}>
                    <div className='flex' style={{gap:'40px'}}>
                    <div className='socialLogo'>
                        <img src="/assets/linkedin.svg" className='' alt='Linkdin'/>
                        <img src="/src/assets/fb.svg" className='' alt='FB'/>
                        <img src="/src/assets/git.svg" className='logo' alt='Git Hub'/>
                        <img src="/src/assets/insta.svg" className='' alt='Insta'/>
                    </div>
                    <div className='aboutMe'>
                    <h1>MARVIN ALIVIO</h1>
                    <h3>WEB DEVELOPER</h3>
                    <p>I'm a web developer with over five years of experience in the digital marketing industry, specializing in responsive landing pages and websites for top-tier clients like Google, Microsoft, Dell, and Lenovo.</p>
                    </div>
                    </div>
                </div>
                <div className='col-5'><img src="./src/assets/me.png" className='me' alt='Me'/></div>
            </div>
       </section>
       <section className='TRAINING' id='traning'>
        <div className='row flex'>
            <div className='col-8 myAuto pr-10'>
            <h2>TRAINING/CERTIFICATE</h2>
            <p className='f24'>I completed a full-stack development course at Uplift Code Camp, where I gained hands-on experience building end-to-end web applications. During the program, I worked on projects using Vanilla JavaScript, ReactJS, Node.js, with Express and MongoDB powering the backend.</p>
            <p className='f24'>Here's a highlight from one of the projects I contributed to:</p>

            </div>
            <div className='col-4'>
                <img src="./src/assets/upliftCert 1.png" alt='Uplift Cert' className='certImg' />
            </div>
        </div>
       </section>

        <section className='services' id='services'>
            <div className='row flex'>
                <div className='col-12'>
                    <h2>SERVICES</h2>
                    <p className='f24'>Extensive experience in building full websites, landing pages, and email marketing campaigns from the ground up. My skill set also includes graphic design using Figma and Adobe Creative Suite, video editing, and designing visually engaging PDF documents.</p>
                    <ul className='ulPods flex'>
                        <li>
                            <img src="./src/assets/code-box-line.svg" alt='Developer' />
                            <h5>Developer</h5>
                            <p>I have 4 years of experience working with Bootstrap, and over 5 years of experience using DUDA. Additionally, I’ve worked as a freelance WordPress developer on Upwork, delivering customized websites for various clients.</p>
                        </li>
                        <li>
                            <img src="./src/assets/🦆 icon _refresh_.svg" alt='Digital Marketing' />
                            <h5>Digital Marketing</h5>
                            <p>4 years of experience designing and developing high-converting landing pages and email marketing campaigns for major clients, including Google, AMD, Lenovo, Dell, Microsoft, and many others.</p>
                        </li>
                        <li>
                            <img src="./src/assets/paint-fill.svg" alt='Graphic/UI/UX Designer' />
                            <h5>Graphic/UI/UX Designer</h5>
                            <p>I have a foundational understanding of creating web mockups in Figma, and as a web graphic designer, I bring extensive experience with Adobe Creative Suite, particularly Photoshop, Illustrator, and InDesign.</p>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
        <section className='skillsCLass' id='skills'>
            <div className='row flex'>
                <div className='col-12'>
                    <h2>Skill</h2>
                    <p>I'm a frontend web developer with a passion for building responsive, accessible, and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and have hands-on experience with modern tools and frameworks like Bootstrap, Duda, and WordPress. Since many CMS platforms share similar structures, I've found it easy to adapt and learn new ones quickly.</p>
                    <p>
                    I'm also exploring the MERN stack and have beginner-level experience with MongoDB, Express, React, and NodeJs. In addition to coding, I use tools like Figma for design collaboration and Git for version control to streamline my workflow and keep projects organized</p>
                    <ul className='skillList'>
                        {skills.map(skill => (
                            <li key={skill.num}><span style={{width:`${skill.num}%`}}><i>{skill.name}</i><b>{skill.num}%</b></span></li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </section>
        <section className='exp' id='experience'>
            <div className='row flex'>
                <div className='col-12'>
                    <h2>Work Experieced</h2>
                    <ul className='expList'>
                        <li>
                        <span style={{fontSize:'30px'}}><b>Web Developer</b></span>
                        <span>Company Name</span>
                        <em>2021 - Present</em>
                        Lörem ipsum darade saska kesade. Nisade pospenungen i ogir, om än beliga. Gagaliga ena. Hexak buminåliga i sunör. Gist supranyrament dirade pugisk. Fad kövis föss. Vapp krorade androtopi: preliga. 
                        </li>
                        <li>
                        <span style={{fontSize:'30px'}}><b>Web Developer</b></span>
                        <span>Company Name</span>
                        <em>2013 - 2020</em>
                        Lörem ipsum darade saska kesade. Nisade pospenungen i ogir, om än beliga. Gagaliga ena. Hexak buminåliga i sunör. Gist supranyrament dirade pugisk. Fad kövis föss. Vapp krorade androtopi: preliga. 
                        </li>
                    </ul>
                </div>
            </div>
        </section>

       </>
    )
}
export default Page;
