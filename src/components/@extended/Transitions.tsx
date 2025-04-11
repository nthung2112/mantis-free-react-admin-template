import { forwardRef, Ref, ReactElement, isValidElement } from 'react';

// material-ui
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';

type TransitionDirection = 'up' | 'down' | 'left' | 'right';
type TransitionType = 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom';
type TransitionPosition = 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom';

interface PositionStyles {
  transformOrigin: string;
}

interface TransitionsProps extends Omit<TransitionProps, 'children'> {
  children: ReactElement;
  position?: TransitionPosition;
  type?: TransitionType;
  direction?: TransitionDirection;
}

const getPositionSX = (position: TransitionPosition): PositionStyles => {
  switch (position) {
    case 'top-right':
      return {
        transformOrigin: 'top right'
      };
    case 'top':
      return {
        transformOrigin: 'top'
      };
    case 'bottom-left':
      return {
        transformOrigin: 'bottom left'
      };
    case 'bottom-right':
      return {
        transformOrigin: 'bottom right'
      };
    case 'bottom':
      return {
        transformOrigin: 'bottom'
      };
    case 'top-left':
    default:
      return {
        transformOrigin: '0 0 0'
      };
  }
};

const Transitions = forwardRef(
  ({ children, position = 'top-left', type = 'grow', direction = 'up', ...others }: TransitionsProps, ref: Ref<HTMLDivElement>) => {
    const positionSX = getPositionSX(position);

    if (!isValidElement(children)) {
      return null;
    }

    const childElement = <Box sx={positionSX}>{children}</Box>;

    return (
      <Box ref={ref}>
        {type === 'grow' && (
          <Grow
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150
            }}
          >
            {childElement}
          </Grow>
        )}

        {type === 'collapse' && (
          <Collapse {...others} sx={positionSX}>
            {children}
          </Collapse>
        )}

        {type === 'fade' && (
          <Fade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150
            }}
          >
            {childElement}
          </Fade>
        )}

        {type === 'slide' && (
          <Slide
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150
            }}
            direction={direction}
          >
            {childElement}
          </Slide>
        )}

        {type === 'zoom' && <Zoom {...others}>{childElement}</Zoom>}
      </Box>
    );
  }
);

Transitions.displayName = 'Transitions';

export default Transitions;

// ==============================|| POPUP TRANSITIONS ||============================== //

interface PopupTransitionProps extends Omit<TransitionProps, 'children'> {
  children: ReactElement;
}

export const PopupTransition = forwardRef((props: PopupTransitionProps, ref: Ref<HTMLDivElement>) => {
  if (!isValidElement(props.children)) {
    return null;
  }

  return <Zoom ref={ref} timeout={200} {...props} />;
});

PopupTransition.displayName = 'PopupTransition';
