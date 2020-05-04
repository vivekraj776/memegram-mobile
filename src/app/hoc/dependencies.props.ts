
import {RouteComponentProps} from 'react-router';
import { ImageService } from '../services/image/image.service';

export interface AppDependenciesProps {
  imageService: ImageService;
}

export interface AppProps extends RouteComponentProps<any>, AppDependenciesProps {
}
