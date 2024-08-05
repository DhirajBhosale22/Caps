import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImgVidAudiouploadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImgVidAudiouploadProvider {

  constructor(public http: HttpClient) {
    
  }
  base64img:string='';
  video:any;
  audio:any;
  url:'http://vortexmobievotingapp.000webhostapp.com/imageUpload.php';

 
  
  setImage(img){
    this.base64img=img;
  }
  getImage(){
    return this.base64img;
  }
  setVideo(video){
    this.video=video;
  }
  getVideo(){
    return this.video;
  }
  setAudio(audio){
    this.audio=audio;
  }
  getAudio(){
    return this.audio;
  }
}
