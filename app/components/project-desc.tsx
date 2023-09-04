
type ProjectProps = {
    description: string,
    link: string,
    image: string,
    githubLink: string,
    technologies: string[]

}
export default function ProjectDescription({description, link, githubLink, image, technologies}: ProjectProps) {

    const listOfTechnologies = () => {
        return technologies.map(value => <span className="labels"> {value} </span>);
    }


    return (
        <div className="desc-container">
            <div className="desc-info">
                <div> {description}</div>

                <div>
                    <ul>
                        { listOfTechnologies() }
                    </ul>
                </div>
                <div>
                    <a href={link} target="_blank"> Live Demo </a>
                    <a href={githubLink} target="_blank"> Github Link </a>
                </div>

            </div>
            <div className="desc-link">
                <a href={link} target="_blank">
                    <img src={`${process.env.BASE_PATH}/img/${image}`} alt="wishlist screen"/>
                </a>
            </div>
        </div>
    )
}