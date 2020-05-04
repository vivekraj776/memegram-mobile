import _ from 'lodash';

import { ServiceResponse } from '../service.response';
import {ApiServiceImpl} from '../../api.service.impl';
import {ImageService} from './image.service';
import {ImageModal} from '../../models/image';

export class ImageServiceImpl extends ApiServiceImpl implements ImageService {
    async getImages(): Promise<ServiceResponse<ImageModal>> {
        try {
            console.log(this.get(`/getImages`));
           const result = await this.get(`/getImages`);
           return new ServiceResponse<ImageModal>(result.data);
        } catch (error) {
            return new ServiceResponse<ImageModal>(undefined, ApiServiceImpl.parseError(error));
        }
    }
}