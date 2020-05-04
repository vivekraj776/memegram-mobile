import _ from 'lodash';

export class ImageModal {
    imageUrl : string

    constructor (item : any){
        console.log(item,"======s");
        this.imageUrl =_.get(item , 'imageUrl');
    }
}