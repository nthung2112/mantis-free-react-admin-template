import { Suspense, ComponentType } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LoadableComponent = (props: P) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

  // Add display name for debugging
  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;

  return LoadableComponent;
};

export default Loadable;
