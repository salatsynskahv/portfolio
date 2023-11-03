import {WorkDescriptionObj} from "@/app/interfaces/WorkDescriptionObj";

type WorkDescriptionProp = {
    workDesc: WorkDescriptionObj

}
export const WorkDescription = ({workDesc}: WorkDescriptionProp) => {
    console.log(workDesc);

    if (!workDesc || Object.keys(workDesc).length === 0) {
        return;
    }
    return (<>
        <div className="work-experience">
            <h4>{workDesc.title}</h4>
            <h5>{workDesc.company}</h5>
            <h6>{workDesc.years}</h6>
            <ul>
                {
                    workDesc.experience.map(item => <li>
                        <p> {item} </p>
                    </li>)
                }
            </ul>
        </div>
    </>)
}