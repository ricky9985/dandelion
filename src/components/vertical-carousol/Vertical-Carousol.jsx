import { useState, useEffect } from "react";
import "./Vertical-Carousol.css";

export default function VerticalCarousol(props) {
  const [activeId, setActiveId] = useState(0);
  const [state, setState] = useState({
    activeId: 0,
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
      activeId: id,
      wrapperStyle: {
        backgroundImage: `url('${props.data[id].img}')`,
      },
      panelStyle: {
        backgroundColor: props.data[id].colour,
      },
    });
    setActiveId(id);
  };

  useEffect(() => {
    const d = setTimeout(() => {
      if (activeId === props.data.length - 1) {
        _changeActive(0);
      } else {
        _changeActive(activeId + 1);
      }
    }, 5000);
    return () => {
      clearTimeout(d);
    };
  }, [activeId]);

  return (
    <section className="carousol-wrapper" style={state.wrapperStyle}>
      <Selectors
        data={props.data}
        activeId={state.activeId}
        _changeActive={_changeActive.bind(this)}
      />
      {props.children}
    </section>
  );
}

function Selectors(props) {
  const _handleClick = (id) => {
    if (id !== props.activeId) {
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
          activeId={props.activeId}
        />
      ))}
    </div>
  );
}

function Selector(props) {
  let componentClass = "selector";
  if (props.activeId === props.id) {
    componentClass = "selector active";
  }
  return (
    <div
      className={componentClass}
      onClick={() => props._handleClick(props.id)}
    ></div>
  );
}
