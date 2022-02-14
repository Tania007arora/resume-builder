import { forwardRef } from 'react';
import Popover from 'react-bootstrap/Popover';
export const PopoverSuggestion = forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    return (
      <Popover ref={ref} body {...props}>
        <Popover.Header as="h3">Suggestions</Popover.Header>
        <Popover.Body>
          {children}
        </Popover.Body>
      </Popover>
    );
  },
);