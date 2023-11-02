import { FC } from 'react';
import { useDragLayer } from 'react-dnd';
import MagicLogo from './assets/icons/tools/magic.svg';

// Define the styles for the layer
const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  background: 'transparent', // Ensure the background is transparent
};

const getItemStyles = (currentOffset: any): React.CSSProperties => {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    // Enlarge the item by 50%
    width: '60px',
    height: '60px',
  };
};

const CustomDragLayer: FC = () => {
  const { isDragging, currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      {/* Render the dragged item */}
      <div style={getItemStyles(currentOffset)}>
        <img src={MagicLogo} alt="Magic Wand" style={{ background: 'transparent' }} />
      </div>
    </div>
  );
};

export default CustomDragLayer;
