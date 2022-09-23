import { useState } from "react";
import "./Vertical-Carousol.css";

export default function VerticalCarousol(props) {
  const [state, setState] = useState({
    activeID: 0,
    wrapperStyle: {
      backgroundImage: `url('${props.data[0].img}')`,
    },
    buttonHover: false,
    buttonStyle: {
      color: "#ffffff",
    },
  });
  const _changeActive = (id) => {
    setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${props.data[id].img}')`,
      },
      panelStyle: {
        backgroundColor: props.data[id].colour,
      },
    });
  };

  return (
    <section className="carousol-wrapper" style={state.wrapperStyle}>
      <Selectors
        data={props.data}
        activeID={state.activeID}
        _changeActive={_changeActive.bind(this)}
      />
    </section>
  );
}

function Selectors(props) {
  const _handleClick = (id) => {
    if (id !== props.activeID) {
      props._changeActive(id);
    } else {
      return;
    }
  };
  return (
    <div className="selectors">
      {props.data.map((item) => (
        <Selector
          key={item.id}
          id={item.id}
          _handleClick={_handleClick}
          _changeActive={props._changeActive}
          activeID={props.activeID}
        />
      ))}
    </div>
  );
}

function Selector(props) {
  let componentClass = "selector";
  if (props.activeID === props.id) {
    componentClass = "selector active";
  }
  return (
    <div
      className={componentClass}
      onClick={() => props._handleClick(props.id)}
    ></div>
  );
}
