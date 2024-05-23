
export const Qualifications = (props) => {
    
    return (
        <div className="qualificationcontainer">
          <div className="qualification">
            <div>{props.level}</div>
            <ul>
              <li>{props.grade}</li>
              <li>{props.subjects}</li>
            </ul>
        </div>
      </div>
  );
}
