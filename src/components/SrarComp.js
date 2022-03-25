export default function StarComp(props) {

    return (
        <div>
      <img 
            src=""
            className="card--favorite"
            onClick={props.handleClick}
        />
        <h1>{props.user}</h1>
        </div>
    )
  }