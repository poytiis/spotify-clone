import './Tooltip.scss';

interface TooltipProps {
  type: string;
  children: string
}

const Tooltip = (props: TooltipProps) => {
  return (
    <span className={"tooltip tooltip__" + props.type }>{props.children}</span>  
  );
}

export default Tooltip;
