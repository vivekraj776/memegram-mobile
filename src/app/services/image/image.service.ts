import {ServiceResponse} from '../service.response';
import { ImageModal } from '../../models/image';

export interface ImageService {
    getImages(): Promise<ServiceResponse<ImageModal>>
}