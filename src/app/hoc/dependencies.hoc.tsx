import * as React from 'react';

import { ImageService } from '../services/image/image.service';
import {AppDependenciesProps, AppProps} from './dependencies.props';
import { ImageServiceImpl }  from '../services/image/image.service.impl';

// init dependencies
const imageService: ImageService = new ImageServiceImpl();
const DependencyInjector = <P extends AppProps>(
  Component: React.ComponentType<P>
): typeof React.Component =>
  class Injector extends React.Component<P, AppProps> {

    getDependencies(): AppDependenciesProps {
      return {
        imageService,
      };
    }
    render(): React.ReactNode {
      // injecting dependencies in components from here
      const dependencies = this.getDependencies();
      return (
        <Component {...this.props} {...dependencies} />
      );
    }
  };

export default DependencyInjector;
